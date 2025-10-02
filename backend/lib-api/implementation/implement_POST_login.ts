import { ExpressAA } from "../expressjs-aa/ExpressAA";
import { POST_login_Req } from '../expressjs-aa/api/POST_login';
import { AuthResponse } from '../ts-schema/AuthResponse';
import jsonwebtoken from 'jsonwebtoken';
import { User } from '../model/table/User';
import { Token } from '../model/table/Token';
import bcrypt from 'bcrypt';
import 'dotenv/config';

export function implement_POST_login(engine: ExpressAA) {
  engine.implement({
    endpoint: 'POST /login',
    async fn(param: POST_login_Req): Promise<AuthResponse> {
      // login dengan username, password

      const { username, password } = param.body;

      if (!username || !password) {
        throw new Error("username and password are required");
      }

      const user = await User.findOneBy({ username });

      if (!user) {
        throw new Error("invalid username or password");
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new Error("invalid username or password");
      }

      const jwtsecret = process.env.JWT_SECRET;
      if (!jwtsecret) {
        throw new Error("JWT_SECRET not set");
      }

      const expiresInSeconds = 3600; // 1 jam
      const token = jsonwebtoken.sign(
        { id: user.id, role: user.role },
        jwtsecret,
        { expiresIn: expiresInSeconds }
      );

      //save token to user
        const newToken = new Token();
        newToken.token = token;
        newToken.id_user = user.id; 
        
        // Hitung tanggal kedaluwarsa
        const expirationDate = new Date();
        expirationDate.setSeconds(expirationDate.getSeconds() + expiresInSeconds);
        newToken.expired_at = expirationDate;

        // 3. Simpan token baru ke tabel 'tokens'
        await Token.save(newToken);
        

      return { 
        token, 
        user 
      };
      
    }
  });
}
