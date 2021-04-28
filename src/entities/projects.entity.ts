/* eslint-disable prettier/prettier */
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'projects'})
export class Project extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('simple-array')
    pictures: string[];

    @Column('text')
    details: string;

    @Column('text')
    client: string;

    @Column('text', {nullable: true})
    link:string;

    @Column('simple-array')
    frameworks: string[];

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;
}