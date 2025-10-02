import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { User } from '../../model/table/User'
import { MetodePembayaran } from '../../model/enum/MetodePembayaran'
import { TransactionItem } from "./TransactionItem";


@Entity('Transaction')
export class Transaction extends BaseEntity {
  @Column({
    type: 'bigint',
    nullable: false,
  })
  @PrimaryGeneratedColumn('increment')
  id!: number;
  @ManyToOne(() => User, x => x.id, { nullable: false })
  @JoinColumn({ name: 'id_user' })
  otm_id_user!: User;
  @Column({
    name: 'id_user',
    type: 'bigint',
    nullable: false,
  })
  id_user!: number;
  @Column({
    type: 'bigint',
    nullable: false,
  })
  total_amount!: number;
  @Column({
    type: 'bigint',
    nullable: false,
  })
  total_product_sold!: number;
  @Column({
    type: 'enum',
    enum: MetodePembayaran,
    nullable: true,
    default: 'Tunai',
  })
  methode_payment?: MetodePembayaran;
  @Column({
    type: 'timestamp',
    nullable: false,
  })
  transaction_date!: Date;
  @Column({
    type: 'boolean',
    nullable: true,
    default: false,
  })
  status?: boolean;

  // Relasi Nambahin Manual dengan TransactionItem
  @OneToMany(() => TransactionItem, (item) => item.id_transaction)
  items!: TransactionItem[];
}