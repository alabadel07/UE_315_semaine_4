import { Mutation, Query, Resolver, Args, Int } from "@nestjs/graphql";
import { UserType } from "./dto/create-user.dto";
import { UpdateUserInput } from "./inputs/user-update.input";
import { UserInput } from "./inputs/user.input";
import { UsersService } from "./users.service";

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
  ) {} 

  @Query(()=> String) 
  async hello() {
    return 'hello';
  }

  @Query(()=> [UserType])
  async users() {
    return this.usersService.findAll();
  }

  @Mutation(()=> UserType)
  async createUser(@Args('input') input :UserInput) {
    return this.usersService.create(input);
  }

  @Mutation(() => UserType)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => UserType)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}