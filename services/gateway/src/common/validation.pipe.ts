import { ArgumentMetadata, BadRequestException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

@Injectable()
export class ValidationPipe implements PipeTransform<any>{
    async transform(value: any, metadata: ArgumentMetadata) {
        if (!value) {
            throw new BadRequestException('No Data submiited');
        }

        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = plainToClass(metatype, value);
        const errors = await validate(object, {
            whitelist: true,
            supressUnknownValues: true,
            forbidUnknownValues: true,
            forbidNonWhitelisted: true,
        });
        if (errors.length > 0) {
            throw new HttpException(
                { message: 'Invalid Payload', errors: this.buildError(errors) },
                HttpStatus.BAD_REQUEST,
            );
        }
        return value;
        
    }
    private buildError(errors) {
        const result = {};
        errors.forEach(el => {
            const prop = el.property;
            Object.entries(el.constraints).forEach(constraint => {
                result[prop + constraint[0]] = `${constraint[1]}`;
            });
        });
        return result;
    }

    private toValidate(metatype): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find(type => metatype === type);
    }

}