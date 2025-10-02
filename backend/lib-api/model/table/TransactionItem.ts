import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { Transaction } from '../../model/table/Transaction'
import { Product } from '../../model/table/Product'

@Entity('TransactionItem')
export class TransactionItem extends BaseEntity {
  @Column({
    type: 'bigint',
    nullable: false,
  })
  @PrimaryGeneratedColumn('increment')
  id!: number;
  @ManyToOne(() => Transaction, x => x.id, { 
    nullable: false,
    onDelete: 'CASCADE' // Jika transaksi dihapus, item terkait juga dihapus
  })  
  @JoinColumn({ name: 'id_transaction' })
  otm_id_transaction!: Transaction;
  @Column({
    name: 'id_transaction',
    type: 'bigint',
    nullable: false,
  })
  id_transaction!: number;
  @ManyToOne(() => Product, x => x.id, { nullable: false })
  @JoinColumn({ name: 'id_product' })
  otm_id_product!: Product;
  @Column({
    name: 'id_product',
    type: 'bigint',
    nullable: false,
  })
  id_product!: number;
  @Column({
    type: 'bigint',
    nullable: false,
  })
  price_per_item!: number;
  @Column({
    type: 'bigint',
    nullable: false,
  })
  quantity!: number;
  @Column({
    type: 'bigint',
    nullable: false,
  })
  subtotal!: number;
}