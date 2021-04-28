/* eslint-disable prettier/prettier */
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'contacts'})
export class Contact extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text')
    email: string;

    @Column('text', {nullable: true})
    website: string;

    @Column('numeric')
    phoneNumber: number;

    @Column('text')
    message: string;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;
}