import { IsNumber, IsString, Min, MinLength } from "class-validator"

export class CreateBusDto {
    
    @IsString()
    @MinLength(1)
    readonly placa: string;
    
    @IsNumber()
    @Min(1)
    readonly capacidad: number;

    @IsString()
    @MinLength(1)
    readonly modelo: string;
}
