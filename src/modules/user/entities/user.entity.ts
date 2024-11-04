import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 20,
    comment: '用户名',
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    comment: '昵称',
  })
  nickname: string;

  @Column({
    type: 'varchar',
    length: 100,
    comment: '密码',
  })
  password: string;

  @Column({
    name: 'create_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    comment: '创建时间',
  })
  createAt: Date;

  @Column({
    name: 'update_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    comment: '创建时间',
  })
  updateAt: Date;
}
