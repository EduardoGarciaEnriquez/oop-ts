//class validator works as decorators or functions, depends on the first letter
//uppercase intial is a decorator, lowercase inital is a function
import {
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
  validateOrReject,
} from "class-validator";

import { AccessType, Category } from "../models/category.model";

//prefix I for interfaces
export interface ICreateCategoryDto extends Omit<Category, "id"> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  //(!) to tell ts that we're gonna initialize var later

  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsEnum(AccessType)
  @IsOptional()
  access?: AccessType | undefined;
}

async function testCreateCategory() {
  try {
    const dto = new CreateCategoryDto();
    dto.name = "123";
    await validateOrReject(dto);
  } catch (error) {
    console.error(error);
  }
}

testCreateCategory();
