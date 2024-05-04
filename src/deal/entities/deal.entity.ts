import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Deal {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    global_dhs: number

    @Column()
    tiket_dhs: number

    @Column()
    yield: string

    @Column()
    days_left: number

    @Column()
    sold: number

    @Column()
    name: string

    @Column()
    img_src: string
}
