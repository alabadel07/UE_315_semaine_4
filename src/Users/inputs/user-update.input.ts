import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { UserType } from '../dto/create-user.dto';

@InputType()
export class UpdateUserInput extends PartialType(UserType) {
  @Field(() => Int)
  id: number;
}
