import { IsNumber, IsString } from "class-validator"

export class BookDomain {

    @IsString()
    readonly name: string

    @IsNumber()
    readonly totalPage: number

    @IsString()
    readonly author: string
}