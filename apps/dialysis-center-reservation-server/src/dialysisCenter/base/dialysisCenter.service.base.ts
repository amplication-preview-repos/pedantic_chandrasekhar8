/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DialysisCenter as PrismaDialysisCenter } from "@prisma/client";

export class DialysisCenterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DialysisCenterCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dialysisCenter.count(args);
  }

  async dialysisCenters(
    args: Prisma.DialysisCenterFindManyArgs
  ): Promise<PrismaDialysisCenter[]> {
    return this.prisma.dialysisCenter.findMany(args);
  }
  async dialysisCenter(
    args: Prisma.DialysisCenterFindUniqueArgs
  ): Promise<PrismaDialysisCenter | null> {
    return this.prisma.dialysisCenter.findUnique(args);
  }
  async createDialysisCenter(
    args: Prisma.DialysisCenterCreateArgs
  ): Promise<PrismaDialysisCenter> {
    return this.prisma.dialysisCenter.create(args);
  }
  async updateDialysisCenter(
    args: Prisma.DialysisCenterUpdateArgs
  ): Promise<PrismaDialysisCenter> {
    return this.prisma.dialysisCenter.update(args);
  }
  async deleteDialysisCenter(
    args: Prisma.DialysisCenterDeleteArgs
  ): Promise<PrismaDialysisCenter> {
    return this.prisma.dialysisCenter.delete(args);
  }
}
