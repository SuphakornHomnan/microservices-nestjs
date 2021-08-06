import { IsNumber, IsString } from "class-validator"

export class BookDomain {

    @IsString()
    readonly name: string

    @IsNumber()
    readonly totalPage: number

    @IsString()
    readonly author: string
}

export interface BookDTO {
    id: number
    name: string
    totalPage: number
    author: string
}

export interface IBookMQ {
    status: number
    message: string
    book?: BookDTO
}