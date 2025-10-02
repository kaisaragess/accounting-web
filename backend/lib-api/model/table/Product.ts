import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from "typeorm";

@Entity('Product')
export class Product extends BaseEntity {
  @Column({
    type: 'bigint',
    nullable: false,
  })
  @PrimaryGeneratedColumn('increment')
  id!: number;
  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  category!: string;
  @Column({
    type: 'varchar',
    length: 200,
    nullable: false,
  })
  name!: string;
  @Column({
    type: 'bigint',
    nullable: false,
  })
  price!: number;
  @Column({
    type: 'varchar',
    length: 200,
    nullable: true,
  })
  imgurl?: string;
  @Column({
    type: 'text',
    nullable: true,
  })
  description?: string;
  @Column({
    type: 'bigint',
    nullable: false,
  })
  quantity!: number;
}