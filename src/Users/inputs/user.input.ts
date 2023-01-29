import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UserInput {
    @Field()
    readonly id: Number;
    @Field()
    readonly firstname: String;
    @Field()
    readonly lastname: String;
    @Field()
    readonly email: String; 
}
