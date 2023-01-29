import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserType {
    // @Field(()=> ID)
    // id: string;
    @Field()
    readonly id: Number;
    @Field()
    readonly firstname: String;
    @Field()
    readonly lastname: String;
    @Field()
    readonly email: String; 
}