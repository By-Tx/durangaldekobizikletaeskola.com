
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model account
 * 
 */
export type account = $Result.DefaultSelection<Prisma.$accountPayload>
/**
 * Model deportistas
 * 
 */
export type deportistas = $Result.DefaultSelection<Prisma.$deportistasPayload>
/**
 * Model entrenadores
 * 
 */
export type entrenadores = $Result.DefaultSelection<Prisma.$entrenadoresPayload>
/**
 * Model events
 * 
 */
export type events = $Result.DefaultSelection<Prisma.$eventsPayload>
/**
 * Model events_resultado
 * 
 */
export type events_resultado = $Result.DefaultSelection<Prisma.$events_resultadoPayload>
/**
 * Model session
 * 
 */
export type session = $Result.DefaultSelection<Prisma.$sessionPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model verification
 * 
 */
export type verification = $Result.DefaultSelection<Prisma.$verificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const events_categoria: {
  Cadetes: 'Cadetes',
  Juveniles: 'Juveniles'
};

export type events_categoria = (typeof events_categoria)[keyof typeof events_categoria]


export const events_modalidad: {
  Carretera: 'Carretera',
  Mountain_Bike: 'Mountain_Bike',
  Ciclocross: 'Ciclocross',
  Pista: 'Pista'
};

export type events_modalidad = (typeof events_modalidad)[keyof typeof events_modalidad]


export const user_role: {
  admin: 'admin',
  staff: 'staff',
  coach: 'coach',
  runner: 'runner',
  user: 'user'
};

export type user_role = (typeof user_role)[keyof typeof user_role]

}

export type events_categoria = $Enums.events_categoria

export const events_categoria: typeof $Enums.events_categoria

export type events_modalidad = $Enums.events_modalidad

export const events_modalidad: typeof $Enums.events_modalidad

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.accountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deportistas`: Exposes CRUD operations for the **deportistas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deportistas
    * const deportistas = await prisma.deportistas.findMany()
    * ```
    */
  get deportistas(): Prisma.deportistasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entrenadores`: Exposes CRUD operations for the **entrenadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entrenadores
    * const entrenadores = await prisma.entrenadores.findMany()
    * ```
    */
  get entrenadores(): Prisma.entrenadoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.eventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events_resultado`: Exposes CRUD operations for the **events_resultado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events_resultados
    * const events_resultados = await prisma.events_resultado.findMany()
    * ```
    */
  get events_resultado(): Prisma.events_resultadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.sessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.verificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    account: 'account',
    deportistas: 'deportistas',
    entrenadores: 'entrenadores',
    events: 'events',
    events_resultado: 'events_resultado',
    session: 'session',
    user: 'user',
    verification: 'verification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "deportistas" | "entrenadores" | "events" | "events_resultado" | "session" | "user" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      account: {
        payload: Prisma.$accountPayload<ExtArgs>
        fields: Prisma.accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findFirst: {
            args: Prisma.accountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findMany: {
            args: Prisma.accountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          create: {
            args: Prisma.accountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          createMany: {
            args: Prisma.accountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.accountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          update: {
            args: Prisma.accountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          deleteMany: {
            args: Prisma.accountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.accountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.accountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      deportistas: {
        payload: Prisma.$deportistasPayload<ExtArgs>
        fields: Prisma.deportistasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.deportistasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deportistasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.deportistasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deportistasPayload>
          }
          findFirst: {
            args: Prisma.deportistasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deportistasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.deportistasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deportistasPayload>
          }
          findMany: {
            args: Prisma.deportistasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deportistasPayload>[]
          }
          create: {
            args: Prisma.deportistasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deportistasPayload>
          }
          createMany: {
            args: Prisma.deportistasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.deportistasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deportistasPayload>
          }
          update: {
            args: Prisma.deportistasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deportistasPayload>
          }
          deleteMany: {
            args: Prisma.deportistasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.deportistasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.deportistasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deportistasPayload>
          }
          aggregate: {
            args: Prisma.DeportistasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeportistas>
          }
          groupBy: {
            args: Prisma.deportistasGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeportistasGroupByOutputType>[]
          }
          count: {
            args: Prisma.deportistasCountArgs<ExtArgs>
            result: $Utils.Optional<DeportistasCountAggregateOutputType> | number
          }
        }
      }
      entrenadores: {
        payload: Prisma.$entrenadoresPayload<ExtArgs>
        fields: Prisma.entrenadoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.entrenadoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.entrenadoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>
          }
          findFirst: {
            args: Prisma.entrenadoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.entrenadoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>
          }
          findMany: {
            args: Prisma.entrenadoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>[]
          }
          create: {
            args: Prisma.entrenadoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>
          }
          createMany: {
            args: Prisma.entrenadoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.entrenadoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>
          }
          update: {
            args: Prisma.entrenadoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>
          }
          deleteMany: {
            args: Prisma.entrenadoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.entrenadoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.entrenadoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>
          }
          aggregate: {
            args: Prisma.EntrenadoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntrenadores>
          }
          groupBy: {
            args: Prisma.entrenadoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntrenadoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.entrenadoresCountArgs<ExtArgs>
            result: $Utils.Optional<EntrenadoresCountAggregateOutputType> | number
          }
        }
      }
      events: {
        payload: Prisma.$eventsPayload<ExtArgs>
        fields: Prisma.eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findFirst: {
            args: Prisma.eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findMany: {
            args: Prisma.eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          create: {
            args: Prisma.eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          createMany: {
            args: Prisma.eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          update: {
            args: Prisma.eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          deleteMany: {
            args: Prisma.eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      events_resultado: {
        payload: Prisma.$events_resultadoPayload<ExtArgs>
        fields: Prisma.events_resultadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.events_resultadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_resultadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.events_resultadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_resultadoPayload>
          }
          findFirst: {
            args: Prisma.events_resultadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_resultadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.events_resultadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_resultadoPayload>
          }
          findMany: {
            args: Prisma.events_resultadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_resultadoPayload>[]
          }
          create: {
            args: Prisma.events_resultadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_resultadoPayload>
          }
          createMany: {
            args: Prisma.events_resultadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.events_resultadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_resultadoPayload>
          }
          update: {
            args: Prisma.events_resultadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_resultadoPayload>
          }
          deleteMany: {
            args: Prisma.events_resultadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.events_resultadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.events_resultadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_resultadoPayload>
          }
          aggregate: {
            args: Prisma.Events_resultadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents_resultado>
          }
          groupBy: {
            args: Prisma.events_resultadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Events_resultadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.events_resultadoCountArgs<ExtArgs>
            result: $Utils.Optional<Events_resultadoCountAggregateOutputType> | number
          }
        }
      }
      session: {
        payload: Prisma.$sessionPayload<ExtArgs>
        fields: Prisma.sessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          findFirst: {
            args: Prisma.sessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          findMany: {
            args: Prisma.sessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>[]
          }
          create: {
            args: Prisma.sessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          createMany: {
            args: Prisma.sessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          update: {
            args: Prisma.sessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          deleteMany: {
            args: Prisma.sessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.sessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      verification: {
        payload: Prisma.$verificationPayload<ExtArgs>
        fields: Prisma.verificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.verificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.verificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>
          }
          findFirst: {
            args: Prisma.verificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.verificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>
          }
          findMany: {
            args: Prisma.verificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>[]
          }
          create: {
            args: Prisma.verificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>
          }
          createMany: {
            args: Prisma.verificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.verificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>
          }
          update: {
            args: Prisma.verificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>
          }
          deleteMany: {
            args: Prisma.verificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.verificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.verificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.verificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.verificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: accountOmit
    deportistas?: deportistasOmit
    entrenadores?: entrenadoresOmit
    events?: eventsOmit
    events_resultado?: events_resultadoOmit
    session?: sessionOmit
    user?: userOmit
    verification?: verificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DeportistasCountOutputType
   */

  export type DeportistasCountOutputType = {
    entrenadores: number
    events_resultado: number
  }

  export type DeportistasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entrenadores?: boolean | DeportistasCountOutputTypeCountEntrenadoresArgs
    events_resultado?: boolean | DeportistasCountOutputTypeCountEvents_resultadoArgs
  }

  // Custom InputTypes
  /**
   * DeportistasCountOutputType without action
   */
  export type DeportistasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeportistasCountOutputType
     */
    select?: DeportistasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeportistasCountOutputType without action
   */
  export type DeportistasCountOutputTypeCountEntrenadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entrenadoresWhereInput
  }

  /**
   * DeportistasCountOutputType without action
   */
  export type DeportistasCountOutputTypeCountEvents_resultadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: events_resultadoWhereInput
  }


  /**
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    events_resultado: number
  }

  export type EventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events_resultado?: boolean | EventsCountOutputTypeCountEvents_resultadoArgs
  }

  // Custom InputTypes
  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountEvents_resultadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: events_resultadoWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    deportistas: number
    entrenadores: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deportistas?: boolean | UserCountOutputTypeCountDeportistasArgs
    entrenadores?: boolean | UserCountOutputTypeCountEntrenadoresArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeportistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deportistasWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEntrenadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entrenadoresWhereInput
  }


  /**
   * Models
   */

  /**
   * Model account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account to aggregate.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountWhereInput
    orderBy?: accountOrderByWithAggregationInput | accountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>



  export type accountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>

  export type $accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "account"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type accountGetPayload<S extends boolean | null | undefined | accountDefaultArgs> = $Result.GetResult<Prisma.$accountPayload, S>

  type accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['account'], meta: { name: 'account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {accountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountFindUniqueArgs>(args: SelectSubset<T, accountFindUniqueArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountFindUniqueOrThrowArgs>(args: SelectSubset<T, accountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountFindFirstArgs>(args?: SelectSubset<T, accountFindFirstArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountFindFirstOrThrowArgs>(args?: SelectSubset<T, accountFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountFindManyArgs>(args?: SelectSubset<T, accountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {accountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends accountCreateArgs>(args: SelectSubset<T, accountCreateArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountCreateManyArgs>(args?: SelectSubset<T, accountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {accountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends accountDeleteArgs>(args: SelectSubset<T, accountDeleteArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {accountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountUpdateArgs>(args: SelectSubset<T, accountUpdateArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountDeleteManyArgs>(args?: SelectSubset<T, accountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountUpdateManyArgs>(args: SelectSubset<T, accountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {accountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends accountUpsertArgs>(args: SelectSubset<T, accountUpsertArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountCountArgs>(
      args?: Subset<T, accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountGroupByArgs['orderBy'] }
        : { orderBy?: accountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the account model
   */
  readonly fields: accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the account model
   */
  interface accountFieldRefs {
    readonly id: FieldRef<"account", 'String'>
    readonly accountId: FieldRef<"account", 'String'>
    readonly providerId: FieldRef<"account", 'String'>
    readonly userId: FieldRef<"account", 'String'>
    readonly accessToken: FieldRef<"account", 'String'>
    readonly refreshToken: FieldRef<"account", 'String'>
    readonly idToken: FieldRef<"account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"account", 'DateTime'>
    readonly scope: FieldRef<"account", 'String'>
    readonly password: FieldRef<"account", 'String'>
    readonly createdAt: FieldRef<"account", 'DateTime'>
    readonly updatedAt: FieldRef<"account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * account findUnique
   */
  export type accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findUniqueOrThrow
   */
  export type accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findFirst
   */
  export type accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findFirstOrThrow
   */
  export type accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findMany
   */
  export type accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account create
   */
  export type accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * The data needed to create a account.
     */
    data: XOR<accountCreateInput, accountUncheckedCreateInput>
  }

  /**
   * account createMany
   */
  export type accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountCreateManyInput | accountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * account update
   */
  export type accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * The data needed to update a account.
     */
    data: XOR<accountUpdateInput, accountUncheckedUpdateInput>
    /**
     * Choose, which account to update.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account updateMany
   */
  export type accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * account upsert
   */
  export type accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * The filter to search for the account to update in case it exists.
     */
    where: accountWhereUniqueInput
    /**
     * In case the account found by the `where` argument doesn't exist, create a new account with this data.
     */
    create: XOR<accountCreateInput, accountUncheckedCreateInput>
    /**
     * In case the account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountUpdateInput, accountUncheckedUpdateInput>
  }

  /**
   * account delete
   */
  export type accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Filter which account to delete.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account deleteMany
   */
  export type accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * account without action
   */
  export type accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
  }


  /**
   * Model deportistas
   */

  export type AggregateDeportistas = {
    _count: DeportistasCountAggregateOutputType | null
    _avg: DeportistasAvgAggregateOutputType | null
    _sum: DeportistasSumAggregateOutputType | null
    _min: DeportistasMinAggregateOutputType | null
    _max: DeportistasMaxAggregateOutputType | null
  }

  export type DeportistasAvgAggregateOutputType = {
    telefono: number | null
    peso: Decimal | null
    altura: Decimal | null
    ftp: Decimal | null
    pulso: number | null
  }

  export type DeportistasSumAggregateOutputType = {
    telefono: bigint | null
    peso: Decimal | null
    altura: Decimal | null
    ftp: Decimal | null
    pulso: number | null
  }

  export type DeportistasMinAggregateOutputType = {
    numero_licencia: string | null
    nombre: string | null
    apellidos: string | null
    dni: string | null
    telefono: bigint | null
    fecha_nacimiento: Date | null
    peso: Decimal | null
    altura: Decimal | null
    ftp: Decimal | null
    pulso: number | null
    user_id: string | null
  }

  export type DeportistasMaxAggregateOutputType = {
    numero_licencia: string | null
    nombre: string | null
    apellidos: string | null
    dni: string | null
    telefono: bigint | null
    fecha_nacimiento: Date | null
    peso: Decimal | null
    altura: Decimal | null
    ftp: Decimal | null
    pulso: number | null
    user_id: string | null
  }

  export type DeportistasCountAggregateOutputType = {
    numero_licencia: number
    nombre: number
    apellidos: number
    dni: number
    telefono: number
    fecha_nacimiento: number
    peso: number
    altura: number
    ftp: number
    pulso: number
    user_id: number
    _all: number
  }


  export type DeportistasAvgAggregateInputType = {
    telefono?: true
    peso?: true
    altura?: true
    ftp?: true
    pulso?: true
  }

  export type DeportistasSumAggregateInputType = {
    telefono?: true
    peso?: true
    altura?: true
    ftp?: true
    pulso?: true
  }

  export type DeportistasMinAggregateInputType = {
    numero_licencia?: true
    nombre?: true
    apellidos?: true
    dni?: true
    telefono?: true
    fecha_nacimiento?: true
    peso?: true
    altura?: true
    ftp?: true
    pulso?: true
    user_id?: true
  }

  export type DeportistasMaxAggregateInputType = {
    numero_licencia?: true
    nombre?: true
    apellidos?: true
    dni?: true
    telefono?: true
    fecha_nacimiento?: true
    peso?: true
    altura?: true
    ftp?: true
    pulso?: true
    user_id?: true
  }

  export type DeportistasCountAggregateInputType = {
    numero_licencia?: true
    nombre?: true
    apellidos?: true
    dni?: true
    telefono?: true
    fecha_nacimiento?: true
    peso?: true
    altura?: true
    ftp?: true
    pulso?: true
    user_id?: true
    _all?: true
  }

  export type DeportistasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deportistas to aggregate.
     */
    where?: deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deportistas to fetch.
     */
    orderBy?: deportistasOrderByWithRelationInput | deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned deportistas
    **/
    _count?: true | DeportistasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeportistasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeportistasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeportistasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeportistasMaxAggregateInputType
  }

  export type GetDeportistasAggregateType<T extends DeportistasAggregateArgs> = {
        [P in keyof T & keyof AggregateDeportistas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeportistas[P]>
      : GetScalarType<T[P], AggregateDeportistas[P]>
  }




  export type deportistasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deportistasWhereInput
    orderBy?: deportistasOrderByWithAggregationInput | deportistasOrderByWithAggregationInput[]
    by: DeportistasScalarFieldEnum[] | DeportistasScalarFieldEnum
    having?: deportistasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeportistasCountAggregateInputType | true
    _avg?: DeportistasAvgAggregateInputType
    _sum?: DeportistasSumAggregateInputType
    _min?: DeportistasMinAggregateInputType
    _max?: DeportistasMaxAggregateInputType
  }

  export type DeportistasGroupByOutputType = {
    numero_licencia: string
    nombre: string | null
    apellidos: string | null
    dni: string | null
    telefono: bigint | null
    fecha_nacimiento: Date | null
    peso: Decimal | null
    altura: Decimal | null
    ftp: Decimal | null
    pulso: number | null
    user_id: string | null
    _count: DeportistasCountAggregateOutputType | null
    _avg: DeportistasAvgAggregateOutputType | null
    _sum: DeportistasSumAggregateOutputType | null
    _min: DeportistasMinAggregateOutputType | null
    _max: DeportistasMaxAggregateOutputType | null
  }

  type GetDeportistasGroupByPayload<T extends deportistasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeportistasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeportistasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeportistasGroupByOutputType[P]>
            : GetScalarType<T[P], DeportistasGroupByOutputType[P]>
        }
      >
    >


  export type deportistasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    numero_licencia?: boolean
    nombre?: boolean
    apellidos?: boolean
    dni?: boolean
    telefono?: boolean
    fecha_nacimiento?: boolean
    peso?: boolean
    altura?: boolean
    ftp?: boolean
    pulso?: boolean
    user_id?: boolean
    user?: boolean | deportistas$userArgs<ExtArgs>
    entrenadores?: boolean | deportistas$entrenadoresArgs<ExtArgs>
    events_resultado?: boolean | deportistas$events_resultadoArgs<ExtArgs>
    _count?: boolean | DeportistasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deportistas"]>



  export type deportistasSelectScalar = {
    numero_licencia?: boolean
    nombre?: boolean
    apellidos?: boolean
    dni?: boolean
    telefono?: boolean
    fecha_nacimiento?: boolean
    peso?: boolean
    altura?: boolean
    ftp?: boolean
    pulso?: boolean
    user_id?: boolean
  }

  export type deportistasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"numero_licencia" | "nombre" | "apellidos" | "dni" | "telefono" | "fecha_nacimiento" | "peso" | "altura" | "ftp" | "pulso" | "user_id", ExtArgs["result"]["deportistas"]>
  export type deportistasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | deportistas$userArgs<ExtArgs>
    entrenadores?: boolean | deportistas$entrenadoresArgs<ExtArgs>
    events_resultado?: boolean | deportistas$events_resultadoArgs<ExtArgs>
    _count?: boolean | DeportistasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $deportistasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "deportistas"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      entrenadores: Prisma.$entrenadoresPayload<ExtArgs>[]
      events_resultado: Prisma.$events_resultadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      numero_licencia: string
      nombre: string | null
      apellidos: string | null
      dni: string | null
      telefono: bigint | null
      fecha_nacimiento: Date | null
      peso: Prisma.Decimal | null
      altura: Prisma.Decimal | null
      ftp: Prisma.Decimal | null
      pulso: number | null
      user_id: string | null
    }, ExtArgs["result"]["deportistas"]>
    composites: {}
  }

  type deportistasGetPayload<S extends boolean | null | undefined | deportistasDefaultArgs> = $Result.GetResult<Prisma.$deportistasPayload, S>

  type deportistasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<deportistasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeportistasCountAggregateInputType | true
    }

  export interface deportistasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['deportistas'], meta: { name: 'deportistas' } }
    /**
     * Find zero or one Deportistas that matches the filter.
     * @param {deportistasFindUniqueArgs} args - Arguments to find a Deportistas
     * @example
     * // Get one Deportistas
     * const deportistas = await prisma.deportistas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends deportistasFindUniqueArgs>(args: SelectSubset<T, deportistasFindUniqueArgs<ExtArgs>>): Prisma__deportistasClient<$Result.GetResult<Prisma.$deportistasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deportistas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {deportistasFindUniqueOrThrowArgs} args - Arguments to find a Deportistas
     * @example
     * // Get one Deportistas
     * const deportistas = await prisma.deportistas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends deportistasFindUniqueOrThrowArgs>(args: SelectSubset<T, deportistasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__deportistasClient<$Result.GetResult<Prisma.$deportistasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deportistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deportistasFindFirstArgs} args - Arguments to find a Deportistas
     * @example
     * // Get one Deportistas
     * const deportistas = await prisma.deportistas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends deportistasFindFirstArgs>(args?: SelectSubset<T, deportistasFindFirstArgs<ExtArgs>>): Prisma__deportistasClient<$Result.GetResult<Prisma.$deportistasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deportistas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deportistasFindFirstOrThrowArgs} args - Arguments to find a Deportistas
     * @example
     * // Get one Deportistas
     * const deportistas = await prisma.deportistas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends deportistasFindFirstOrThrowArgs>(args?: SelectSubset<T, deportistasFindFirstOrThrowArgs<ExtArgs>>): Prisma__deportistasClient<$Result.GetResult<Prisma.$deportistasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deportistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deportistasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deportistas
     * const deportistas = await prisma.deportistas.findMany()
     * 
     * // Get first 10 Deportistas
     * const deportistas = await prisma.deportistas.findMany({ take: 10 })
     * 
     * // Only select the `numero_licencia`
     * const deportistasWithNumero_licenciaOnly = await prisma.deportistas.findMany({ select: { numero_licencia: true } })
     * 
     */
    findMany<T extends deportistasFindManyArgs>(args?: SelectSubset<T, deportistasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deportistasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deportistas.
     * @param {deportistasCreateArgs} args - Arguments to create a Deportistas.
     * @example
     * // Create one Deportistas
     * const Deportistas = await prisma.deportistas.create({
     *   data: {
     *     // ... data to create a Deportistas
     *   }
     * })
     * 
     */
    create<T extends deportistasCreateArgs>(args: SelectSubset<T, deportistasCreateArgs<ExtArgs>>): Prisma__deportistasClient<$Result.GetResult<Prisma.$deportistasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deportistas.
     * @param {deportistasCreateManyArgs} args - Arguments to create many Deportistas.
     * @example
     * // Create many Deportistas
     * const deportistas = await prisma.deportistas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends deportistasCreateManyArgs>(args?: SelectSubset<T, deportistasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Deportistas.
     * @param {deportistasDeleteArgs} args - Arguments to delete one Deportistas.
     * @example
     * // Delete one Deportistas
     * const Deportistas = await prisma.deportistas.delete({
     *   where: {
     *     // ... filter to delete one Deportistas
     *   }
     * })
     * 
     */
    delete<T extends deportistasDeleteArgs>(args: SelectSubset<T, deportistasDeleteArgs<ExtArgs>>): Prisma__deportistasClient<$Result.GetResult<Prisma.$deportistasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deportistas.
     * @param {deportistasUpdateArgs} args - Arguments to update one Deportistas.
     * @example
     * // Update one Deportistas
     * const deportistas = await prisma.deportistas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends deportistasUpdateArgs>(args: SelectSubset<T, deportistasUpdateArgs<ExtArgs>>): Prisma__deportistasClient<$Result.GetResult<Prisma.$deportistasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deportistas.
     * @param {deportistasDeleteManyArgs} args - Arguments to filter Deportistas to delete.
     * @example
     * // Delete a few Deportistas
     * const { count } = await prisma.deportistas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends deportistasDeleteManyArgs>(args?: SelectSubset<T, deportistasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deportistasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deportistas
     * const deportistas = await prisma.deportistas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends deportistasUpdateManyArgs>(args: SelectSubset<T, deportistasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deportistas.
     * @param {deportistasUpsertArgs} args - Arguments to update or create a Deportistas.
     * @example
     * // Update or create a Deportistas
     * const deportistas = await prisma.deportistas.upsert({
     *   create: {
     *     // ... data to create a Deportistas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deportistas we want to update
     *   }
     * })
     */
    upsert<T extends deportistasUpsertArgs>(args: SelectSubset<T, deportistasUpsertArgs<ExtArgs>>): Prisma__deportistasClient<$Result.GetResult<Prisma.$deportistasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deportistasCountArgs} args - Arguments to filter Deportistas to count.
     * @example
     * // Count the number of Deportistas
     * const count = await prisma.deportistas.count({
     *   where: {
     *     // ... the filter for the Deportistas we want to count
     *   }
     * })
    **/
    count<T extends deportistasCountArgs>(
      args?: Subset<T, deportistasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeportistasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeportistasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeportistasAggregateArgs>(args: Subset<T, DeportistasAggregateArgs>): Prisma.PrismaPromise<GetDeportistasAggregateType<T>>

    /**
     * Group by Deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deportistasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends deportistasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: deportistasGroupByArgs['orderBy'] }
        : { orderBy?: deportistasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, deportistasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeportistasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the deportistas model
   */
  readonly fields: deportistasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for deportistas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__deportistasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends deportistas$userArgs<ExtArgs> = {}>(args?: Subset<T, deportistas$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    entrenadores<T extends deportistas$entrenadoresArgs<ExtArgs> = {}>(args?: Subset<T, deportistas$entrenadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events_resultado<T extends deportistas$events_resultadoArgs<ExtArgs> = {}>(args?: Subset<T, deportistas$events_resultadoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$events_resultadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the deportistas model
   */
  interface deportistasFieldRefs {
    readonly numero_licencia: FieldRef<"deportistas", 'String'>
    readonly nombre: FieldRef<"deportistas", 'String'>
    readonly apellidos: FieldRef<"deportistas", 'String'>
    readonly dni: FieldRef<"deportistas", 'String'>
    readonly telefono: FieldRef<"deportistas", 'BigInt'>
    readonly fecha_nacimiento: FieldRef<"deportistas", 'DateTime'>
    readonly peso: FieldRef<"deportistas", 'Decimal'>
    readonly altura: FieldRef<"deportistas", 'Decimal'>
    readonly ftp: FieldRef<"deportistas", 'Decimal'>
    readonly pulso: FieldRef<"deportistas", 'Int'>
    readonly user_id: FieldRef<"deportistas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * deportistas findUnique
   */
  export type deportistasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deportistas
     */
    select?: deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deportistas
     */
    omit?: deportistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deportistasInclude<ExtArgs> | null
    /**
     * Filter, which deportistas to fetch.
     */
    where: deportistasWhereUniqueInput
  }

  /**
   * deportistas findUniqueOrThrow
   */
  export type deportistasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deportistas
     */
    select?: deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deportistas
     */
    omit?: deportistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deportistasInclude<ExtArgs> | null
    /**
     * Filter, which deportistas to fetch.
     */
    where: deportistasWhereUniqueInput
  }

  /**
   * deportistas findFirst
   */
  export type deportistasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deportistas
     */
    select?: deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deportistas
     */
    omit?: deportistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deportistasInclude<ExtArgs> | null
    /**
     * Filter, which deportistas to fetch.
     */
    where?: deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deportistas to fetch.
     */
    orderBy?: deportistasOrderByWithRelationInput | deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deportistas.
     */
    cursor?: deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deportistas.
     */
    distinct?: DeportistasScalarFieldEnum | DeportistasScalarFieldEnum[]
  }

  /**
   * deportistas findFirstOrThrow
   */
  export type deportistasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deportistas
     */
    select?: deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deportistas
     */
    omit?: deportistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deportistasInclude<ExtArgs> | null
    /**
     * Filter, which deportistas to fetch.
     */
    where?: deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deportistas to fetch.
     */
    orderBy?: deportistasOrderByWithRelationInput | deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deportistas.
     */
    cursor?: deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deportistas.
     */
    distinct?: DeportistasScalarFieldEnum | DeportistasScalarFieldEnum[]
  }

  /**
   * deportistas findMany
   */
  export type deportistasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deportistas
     */
    select?: deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deportistas
     */
    omit?: deportistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deportistasInclude<ExtArgs> | null
    /**
     * Filter, which deportistas to fetch.
     */
    where?: deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deportistas to fetch.
     */
    orderBy?: deportistasOrderByWithRelationInput | deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing deportistas.
     */
    cursor?: deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deportistas.
     */
    skip?: number
    distinct?: DeportistasScalarFieldEnum | DeportistasScalarFieldEnum[]
  }

  /**
   * deportistas create
   */
  export type deportistasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deportistas
     */
    select?: deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deportistas
     */
    omit?: deportistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deportistasInclude<ExtArgs> | null
    /**
     * The data needed to create a deportistas.
     */
    data: XOR<deportistasCreateInput, deportistasUncheckedCreateInput>
  }

  /**
   * deportistas createMany
   */
  export type deportistasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many deportistas.
     */
    data: deportistasCreateManyInput | deportistasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * deportistas update
   */
  export type deportistasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deportistas
     */
    select?: deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deportistas
     */
    omit?: deportistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deportistasInclude<ExtArgs> | null
    /**
     * The data needed to update a deportistas.
     */
    data: XOR<deportistasUpdateInput, deportistasUncheckedUpdateInput>
    /**
     * Choose, which deportistas to update.
     */
    where: deportistasWhereUniqueInput
  }

  /**
   * deportistas updateMany
   */
  export type deportistasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update deportistas.
     */
    data: XOR<deportistasUpdateManyMutationInput, deportistasUncheckedUpdateManyInput>
    /**
     * Filter which deportistas to update
     */
    where?: deportistasWhereInput
    /**
     * Limit how many deportistas to update.
     */
    limit?: number
  }

  /**
   * deportistas upsert
   */
  export type deportistasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deportistas
     */
    select?: deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deportistas
     */
    omit?: deportistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deportistasInclude<ExtArgs> | null
    /**
     * The filter to search for the deportistas to update in case it exists.
     */
    where: deportistasWhereUniqueInput
    /**
     * In case the deportistas found by the `where` argument doesn't exist, create a new deportistas with this data.
     */
    create: XOR<deportistasCreateInput, deportistasUncheckedCreateInput>
    /**
     * In case the deportistas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<deportistasUpdateInput, deportistasUncheckedUpdateInput>
  }

  /**
   * deportistas delete
   */
  export type deportistasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deportistas
     */
    select?: deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deportistas
     */
    omit?: deportistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deportistasInclude<ExtArgs> | null
    /**
     * Filter which deportistas to delete.
     */
    where: deportistasWhereUniqueInput
  }

  /**
   * deportistas deleteMany
   */
  export type deportistasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deportistas to delete
     */
    where?: deportistasWhereInput
    /**
     * Limit how many deportistas to delete.
     */
    limit?: number
  }

  /**
   * deportistas.user
   */
  export type deportistas$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * deportistas.entrenadores
   */
  export type deportistas$entrenadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    where?: entrenadoresWhereInput
    orderBy?: entrenadoresOrderByWithRelationInput | entrenadoresOrderByWithRelationInput[]
    cursor?: entrenadoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntrenadoresScalarFieldEnum | EntrenadoresScalarFieldEnum[]
  }

  /**
   * deportistas.events_resultado
   */
  export type deportistas$events_resultadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_resultado
     */
    select?: events_resultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_resultado
     */
    omit?: events_resultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_resultadoInclude<ExtArgs> | null
    where?: events_resultadoWhereInput
    orderBy?: events_resultadoOrderByWithRelationInput | events_resultadoOrderByWithRelationInput[]
    cursor?: events_resultadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Events_resultadoScalarFieldEnum | Events_resultadoScalarFieldEnum[]
  }

  /**
   * deportistas without action
   */
  export type deportistasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deportistas
     */
    select?: deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deportistas
     */
    omit?: deportistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deportistasInclude<ExtArgs> | null
  }


  /**
   * Model entrenadores
   */

  export type AggregateEntrenadores = {
    _count: EntrenadoresCountAggregateOutputType | null
    _avg: EntrenadoresAvgAggregateOutputType | null
    _sum: EntrenadoresSumAggregateOutputType | null
    _min: EntrenadoresMinAggregateOutputType | null
    _max: EntrenadoresMaxAggregateOutputType | null
  }

  export type EntrenadoresAvgAggregateOutputType = {
    id: number | null
    telefono: number | null
  }

  export type EntrenadoresSumAggregateOutputType = {
    id: number | null
    telefono: bigint | null
  }

  export type EntrenadoresMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellidos: string | null
    dni: string | null
    telefono: bigint | null
    fecha_nacimiento: Date | null
    user_id: string | null
    deportista_id: string | null
  }

  export type EntrenadoresMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellidos: string | null
    dni: string | null
    telefono: bigint | null
    fecha_nacimiento: Date | null
    user_id: string | null
    deportista_id: string | null
  }

  export type EntrenadoresCountAggregateOutputType = {
    id: number
    nombre: number
    apellidos: number
    dni: number
    telefono: number
    fecha_nacimiento: number
    user_id: number
    deportista_id: number
    _all: number
  }


  export type EntrenadoresAvgAggregateInputType = {
    id?: true
    telefono?: true
  }

  export type EntrenadoresSumAggregateInputType = {
    id?: true
    telefono?: true
  }

  export type EntrenadoresMinAggregateInputType = {
    id?: true
    nombre?: true
    apellidos?: true
    dni?: true
    telefono?: true
    fecha_nacimiento?: true
    user_id?: true
    deportista_id?: true
  }

  export type EntrenadoresMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellidos?: true
    dni?: true
    telefono?: true
    fecha_nacimiento?: true
    user_id?: true
    deportista_id?: true
  }

  export type EntrenadoresCountAggregateInputType = {
    id?: true
    nombre?: true
    apellidos?: true
    dni?: true
    telefono?: true
    fecha_nacimiento?: true
    user_id?: true
    deportista_id?: true
    _all?: true
  }

  export type EntrenadoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entrenadores to aggregate.
     */
    where?: entrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrenadores to fetch.
     */
    orderBy?: entrenadoresOrderByWithRelationInput | entrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: entrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrenadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned entrenadores
    **/
    _count?: true | EntrenadoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntrenadoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntrenadoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntrenadoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntrenadoresMaxAggregateInputType
  }

  export type GetEntrenadoresAggregateType<T extends EntrenadoresAggregateArgs> = {
        [P in keyof T & keyof AggregateEntrenadores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntrenadores[P]>
      : GetScalarType<T[P], AggregateEntrenadores[P]>
  }




  export type entrenadoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entrenadoresWhereInput
    orderBy?: entrenadoresOrderByWithAggregationInput | entrenadoresOrderByWithAggregationInput[]
    by: EntrenadoresScalarFieldEnum[] | EntrenadoresScalarFieldEnum
    having?: entrenadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntrenadoresCountAggregateInputType | true
    _avg?: EntrenadoresAvgAggregateInputType
    _sum?: EntrenadoresSumAggregateInputType
    _min?: EntrenadoresMinAggregateInputType
    _max?: EntrenadoresMaxAggregateInputType
  }

  export type EntrenadoresGroupByOutputType = {
    id: number
    nombre: string | null
    apellidos: string | null
    dni: string | null
    telefono: bigint | null
    fecha_nacimiento: Date | null
    user_id: string | null
    deportista_id: string | null
    _count: EntrenadoresCountAggregateOutputType | null
    _avg: EntrenadoresAvgAggregateOutputType | null
    _sum: EntrenadoresSumAggregateOutputType | null
    _min: EntrenadoresMinAggregateOutputType | null
    _max: EntrenadoresMaxAggregateOutputType | null
  }

  type GetEntrenadoresGroupByPayload<T extends entrenadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntrenadoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntrenadoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntrenadoresGroupByOutputType[P]>
            : GetScalarType<T[P], EntrenadoresGroupByOutputType[P]>
        }
      >
    >


  export type entrenadoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellidos?: boolean
    dni?: boolean
    telefono?: boolean
    fecha_nacimiento?: boolean
    user_id?: boolean
    deportista_id?: boolean
    user?: boolean | entrenadores$userArgs<ExtArgs>
    deportistas?: boolean | entrenadores$deportistasArgs<ExtArgs>
  }, ExtArgs["result"]["entrenadores"]>



  export type entrenadoresSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellidos?: boolean
    dni?: boolean
    telefono?: boolean
    fecha_nacimiento?: boolean
    user_id?: boolean
    deportista_id?: boolean
  }

  export type entrenadoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellidos" | "dni" | "telefono" | "fecha_nacimiento" | "user_id" | "deportista_id", ExtArgs["result"]["entrenadores"]>
  export type entrenadoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | entrenadores$userArgs<ExtArgs>
    deportistas?: boolean | entrenadores$deportistasArgs<ExtArgs>
  }

  export type $entrenadoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "entrenadores"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      deportistas: Prisma.$deportistasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      apellidos: string | null
      dni: string | null
      telefono: bigint | null
      fecha_nacimiento: Date | null
      user_id: string | null
      deportista_id: string | null
    }, ExtArgs["result"]["entrenadores"]>
    composites: {}
  }

  type entrenadoresGetPayload<S extends boolean | null | undefined | entrenadoresDefaultArgs> = $Result.GetResult<Prisma.$entrenadoresPayload, S>

  type entrenadoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<entrenadoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntrenadoresCountAggregateInputType | true
    }

  export interface entrenadoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['entrenadores'], meta: { name: 'entrenadores' } }
    /**
     * Find zero or one Entrenadores that matches the filter.
     * @param {entrenadoresFindUniqueArgs} args - Arguments to find a Entrenadores
     * @example
     * // Get one Entrenadores
     * const entrenadores = await prisma.entrenadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends entrenadoresFindUniqueArgs>(args: SelectSubset<T, entrenadoresFindUniqueArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entrenadores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {entrenadoresFindUniqueOrThrowArgs} args - Arguments to find a Entrenadores
     * @example
     * // Get one Entrenadores
     * const entrenadores = await prisma.entrenadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends entrenadoresFindUniqueOrThrowArgs>(args: SelectSubset<T, entrenadoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrenadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrenadoresFindFirstArgs} args - Arguments to find a Entrenadores
     * @example
     * // Get one Entrenadores
     * const entrenadores = await prisma.entrenadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends entrenadoresFindFirstArgs>(args?: SelectSubset<T, entrenadoresFindFirstArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrenadores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrenadoresFindFirstOrThrowArgs} args - Arguments to find a Entrenadores
     * @example
     * // Get one Entrenadores
     * const entrenadores = await prisma.entrenadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends entrenadoresFindFirstOrThrowArgs>(args?: SelectSubset<T, entrenadoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entrenadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrenadoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entrenadores
     * const entrenadores = await prisma.entrenadores.findMany()
     * 
     * // Get first 10 Entrenadores
     * const entrenadores = await prisma.entrenadores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entrenadoresWithIdOnly = await prisma.entrenadores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends entrenadoresFindManyArgs>(args?: SelectSubset<T, entrenadoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entrenadores.
     * @param {entrenadoresCreateArgs} args - Arguments to create a Entrenadores.
     * @example
     * // Create one Entrenadores
     * const Entrenadores = await prisma.entrenadores.create({
     *   data: {
     *     // ... data to create a Entrenadores
     *   }
     * })
     * 
     */
    create<T extends entrenadoresCreateArgs>(args: SelectSubset<T, entrenadoresCreateArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entrenadores.
     * @param {entrenadoresCreateManyArgs} args - Arguments to create many Entrenadores.
     * @example
     * // Create many Entrenadores
     * const entrenadores = await prisma.entrenadores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends entrenadoresCreateManyArgs>(args?: SelectSubset<T, entrenadoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entrenadores.
     * @param {entrenadoresDeleteArgs} args - Arguments to delete one Entrenadores.
     * @example
     * // Delete one Entrenadores
     * const Entrenadores = await prisma.entrenadores.delete({
     *   where: {
     *     // ... filter to delete one Entrenadores
     *   }
     * })
     * 
     */
    delete<T extends entrenadoresDeleteArgs>(args: SelectSubset<T, entrenadoresDeleteArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entrenadores.
     * @param {entrenadoresUpdateArgs} args - Arguments to update one Entrenadores.
     * @example
     * // Update one Entrenadores
     * const entrenadores = await prisma.entrenadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends entrenadoresUpdateArgs>(args: SelectSubset<T, entrenadoresUpdateArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entrenadores.
     * @param {entrenadoresDeleteManyArgs} args - Arguments to filter Entrenadores to delete.
     * @example
     * // Delete a few Entrenadores
     * const { count } = await prisma.entrenadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends entrenadoresDeleteManyArgs>(args?: SelectSubset<T, entrenadoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrenadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entrenadores
     * const entrenadores = await prisma.entrenadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends entrenadoresUpdateManyArgs>(args: SelectSubset<T, entrenadoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entrenadores.
     * @param {entrenadoresUpsertArgs} args - Arguments to update or create a Entrenadores.
     * @example
     * // Update or create a Entrenadores
     * const entrenadores = await prisma.entrenadores.upsert({
     *   create: {
     *     // ... data to create a Entrenadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrenadores we want to update
     *   }
     * })
     */
    upsert<T extends entrenadoresUpsertArgs>(args: SelectSubset<T, entrenadoresUpsertArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrenadoresCountArgs} args - Arguments to filter Entrenadores to count.
     * @example
     * // Count the number of Entrenadores
     * const count = await prisma.entrenadores.count({
     *   where: {
     *     // ... the filter for the Entrenadores we want to count
     *   }
     * })
    **/
    count<T extends entrenadoresCountArgs>(
      args?: Subset<T, entrenadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntrenadoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntrenadoresAggregateArgs>(args: Subset<T, EntrenadoresAggregateArgs>): Prisma.PrismaPromise<GetEntrenadoresAggregateType<T>>

    /**
     * Group by Entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrenadoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends entrenadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: entrenadoresGroupByArgs['orderBy'] }
        : { orderBy?: entrenadoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, entrenadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntrenadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the entrenadores model
   */
  readonly fields: entrenadoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for entrenadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__entrenadoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends entrenadores$userArgs<ExtArgs> = {}>(args?: Subset<T, entrenadores$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deportistas<T extends entrenadores$deportistasArgs<ExtArgs> = {}>(args?: Subset<T, entrenadores$deportistasArgs<ExtArgs>>): Prisma__deportistasClient<$Result.GetResult<Prisma.$deportistasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the entrenadores model
   */
  interface entrenadoresFieldRefs {
    readonly id: FieldRef<"entrenadores", 'Int'>
    readonly nombre: FieldRef<"entrenadores", 'String'>
    readonly apellidos: FieldRef<"entrenadores", 'String'>
    readonly dni: FieldRef<"entrenadores", 'String'>
    readonly telefono: FieldRef<"entrenadores", 'BigInt'>
    readonly fecha_nacimiento: FieldRef<"entrenadores", 'DateTime'>
    readonly user_id: FieldRef<"entrenadores", 'String'>
    readonly deportista_id: FieldRef<"entrenadores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * entrenadores findUnique
   */
  export type entrenadoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which entrenadores to fetch.
     */
    where: entrenadoresWhereUniqueInput
  }

  /**
   * entrenadores findUniqueOrThrow
   */
  export type entrenadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which entrenadores to fetch.
     */
    where: entrenadoresWhereUniqueInput
  }

  /**
   * entrenadores findFirst
   */
  export type entrenadoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which entrenadores to fetch.
     */
    where?: entrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrenadores to fetch.
     */
    orderBy?: entrenadoresOrderByWithRelationInput | entrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entrenadores.
     */
    cursor?: entrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrenadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entrenadores.
     */
    distinct?: EntrenadoresScalarFieldEnum | EntrenadoresScalarFieldEnum[]
  }

  /**
   * entrenadores findFirstOrThrow
   */
  export type entrenadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which entrenadores to fetch.
     */
    where?: entrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrenadores to fetch.
     */
    orderBy?: entrenadoresOrderByWithRelationInput | entrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entrenadores.
     */
    cursor?: entrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrenadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entrenadores.
     */
    distinct?: EntrenadoresScalarFieldEnum | EntrenadoresScalarFieldEnum[]
  }

  /**
   * entrenadores findMany
   */
  export type entrenadoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which entrenadores to fetch.
     */
    where?: entrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrenadores to fetch.
     */
    orderBy?: entrenadoresOrderByWithRelationInput | entrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing entrenadores.
     */
    cursor?: entrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrenadores.
     */
    skip?: number
    distinct?: EntrenadoresScalarFieldEnum | EntrenadoresScalarFieldEnum[]
  }

  /**
   * entrenadores create
   */
  export type entrenadoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * The data needed to create a entrenadores.
     */
    data: XOR<entrenadoresCreateInput, entrenadoresUncheckedCreateInput>
  }

  /**
   * entrenadores createMany
   */
  export type entrenadoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many entrenadores.
     */
    data: entrenadoresCreateManyInput | entrenadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * entrenadores update
   */
  export type entrenadoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * The data needed to update a entrenadores.
     */
    data: XOR<entrenadoresUpdateInput, entrenadoresUncheckedUpdateInput>
    /**
     * Choose, which entrenadores to update.
     */
    where: entrenadoresWhereUniqueInput
  }

  /**
   * entrenadores updateMany
   */
  export type entrenadoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update entrenadores.
     */
    data: XOR<entrenadoresUpdateManyMutationInput, entrenadoresUncheckedUpdateManyInput>
    /**
     * Filter which entrenadores to update
     */
    where?: entrenadoresWhereInput
    /**
     * Limit how many entrenadores to update.
     */
    limit?: number
  }

  /**
   * entrenadores upsert
   */
  export type entrenadoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * The filter to search for the entrenadores to update in case it exists.
     */
    where: entrenadoresWhereUniqueInput
    /**
     * In case the entrenadores found by the `where` argument doesn't exist, create a new entrenadores with this data.
     */
    create: XOR<entrenadoresCreateInput, entrenadoresUncheckedCreateInput>
    /**
     * In case the entrenadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<entrenadoresUpdateInput, entrenadoresUncheckedUpdateInput>
  }

  /**
   * entrenadores delete
   */
  export type entrenadoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * Filter which entrenadores to delete.
     */
    where: entrenadoresWhereUniqueInput
  }

  /**
   * entrenadores deleteMany
   */
  export type entrenadoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entrenadores to delete
     */
    where?: entrenadoresWhereInput
    /**
     * Limit how many entrenadores to delete.
     */
    limit?: number
  }

  /**
   * entrenadores.user
   */
  export type entrenadores$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * entrenadores.deportistas
   */
  export type entrenadores$deportistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deportistas
     */
    select?: deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deportistas
     */
    omit?: deportistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deportistasInclude<ExtArgs> | null
    where?: deportistasWhereInput
  }

  /**
   * entrenadores without action
   */
  export type entrenadoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
  }


  /**
   * Model events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    fecha: Date | null
    lugar: string | null
    categoria: $Enums.events_categoria | null
    modalidad: $Enums.events_modalidad | null
    descripcion: string | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    fecha: Date | null
    lugar: string | null
    categoria: $Enums.events_categoria | null
    modalidad: $Enums.events_modalidad | null
    descripcion: string | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    nombre: number
    fecha: number
    lugar: number
    categoria: number
    modalidad: number
    descripcion: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    nombre?: true
    fecha?: true
    lugar?: true
    categoria?: true
    modalidad?: true
    descripcion?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    nombre?: true
    fecha?: true
    lugar?: true
    categoria?: true
    modalidad?: true
    descripcion?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    nombre?: true
    fecha?: true
    lugar?: true
    categoria?: true
    modalidad?: true
    descripcion?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to aggregate.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithAggregationInput | eventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    nombre: string | null
    fecha: Date | null
    lugar: string | null
    categoria: $Enums.events_categoria | null
    modalidad: $Enums.events_modalidad | null
    descripcion: string | null
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fecha?: boolean
    lugar?: boolean
    categoria?: boolean
    modalidad?: boolean
    descripcion?: boolean
    events_resultado?: boolean | events$events_resultadoArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>



  export type eventsSelectScalar = {
    id?: boolean
    nombre?: boolean
    fecha?: boolean
    lugar?: boolean
    categoria?: boolean
    modalidad?: boolean
    descripcion?: boolean
  }

  export type eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "fecha" | "lugar" | "categoria" | "modalidad" | "descripcion", ExtArgs["result"]["events"]>
  export type eventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events_resultado?: boolean | events$events_resultadoArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events"
    objects: {
      events_resultado: Prisma.$events_resultadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      fecha: Date | null
      lugar: string | null
      categoria: $Enums.events_categoria | null
      modalidad: $Enums.events_modalidad | null
      descripcion: string | null
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type eventsGetPayload<S extends boolean | null | undefined | eventsDefaultArgs> = $Result.GetResult<Prisma.$eventsPayload, S>

  type eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events'], meta: { name: 'events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {eventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventsFindUniqueArgs>(args: SelectSubset<T, eventsFindUniqueArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventsFindFirstArgs>(args?: SelectSubset<T, eventsFindFirstArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventsFindManyArgs>(args?: SelectSubset<T, eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {eventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends eventsCreateArgs>(args: SelectSubset<T, eventsCreateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {eventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventsCreateManyArgs>(args?: SelectSubset<T, eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Events.
     * @param {eventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends eventsDeleteArgs>(args: SelectSubset<T, eventsDeleteArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {eventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventsUpdateArgs>(args: SelectSubset<T, eventsUpdateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {eventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventsDeleteManyArgs>(args?: SelectSubset<T, eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventsUpdateManyArgs>(args: SelectSubset<T, eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Events.
     * @param {eventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends eventsUpsertArgs>(args: SelectSubset<T, eventsUpsertArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventsCountArgs>(
      args?: Subset<T, eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventsGroupByArgs['orderBy'] }
        : { orderBy?: eventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events model
   */
  readonly fields: eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events_resultado<T extends events$events_resultadoArgs<ExtArgs> = {}>(args?: Subset<T, events$events_resultadoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$events_resultadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the events model
   */
  interface eventsFieldRefs {
    readonly id: FieldRef<"events", 'Int'>
    readonly nombre: FieldRef<"events", 'String'>
    readonly fecha: FieldRef<"events", 'DateTime'>
    readonly lugar: FieldRef<"events", 'String'>
    readonly categoria: FieldRef<"events", 'events_categoria'>
    readonly modalidad: FieldRef<"events", 'events_modalidad'>
    readonly descripcion: FieldRef<"events", 'String'>
  }
    

  // Custom InputTypes
  /**
   * events findUnique
   */
  export type eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findUniqueOrThrow
   */
  export type eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findFirst
   */
  export type eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findFirstOrThrow
   */
  export type eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findMany
   */
  export type eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events create
   */
  export type eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to create a events.
     */
    data: XOR<eventsCreateInput, eventsUncheckedCreateInput>
  }

  /**
   * events createMany
   */
  export type eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events update
   */
  export type eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to update a events.
     */
    data: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
    /**
     * Choose, which events to update.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events updateMany
   */
  export type eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
  }

  /**
   * events upsert
   */
  export type eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The filter to search for the events to update in case it exists.
     */
    where: eventsWhereUniqueInput
    /**
     * In case the events found by the `where` argument doesn't exist, create a new events with this data.
     */
    create: XOR<eventsCreateInput, eventsUncheckedCreateInput>
    /**
     * In case the events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
  }

  /**
   * events delete
   */
  export type eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter which events to delete.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events deleteMany
   */
  export type eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to delete.
     */
    limit?: number
  }

  /**
   * events.events_resultado
   */
  export type events$events_resultadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_resultado
     */
    select?: events_resultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_resultado
     */
    omit?: events_resultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_resultadoInclude<ExtArgs> | null
    where?: events_resultadoWhereInput
    orderBy?: events_resultadoOrderByWithRelationInput | events_resultadoOrderByWithRelationInput[]
    cursor?: events_resultadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Events_resultadoScalarFieldEnum | Events_resultadoScalarFieldEnum[]
  }

  /**
   * events without action
   */
  export type eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
  }


  /**
   * Model events_resultado
   */

  export type AggregateEvents_resultado = {
    _count: Events_resultadoCountAggregateOutputType | null
    _avg: Events_resultadoAvgAggregateOutputType | null
    _sum: Events_resultadoSumAggregateOutputType | null
    _min: Events_resultadoMinAggregateOutputType | null
    _max: Events_resultadoMaxAggregateOutputType | null
  }

  export type Events_resultadoAvgAggregateOutputType = {
    id: number | null
    posicion: number | null
    valoracion_escala: Decimal | null
    evento_id: number | null
  }

  export type Events_resultadoSumAggregateOutputType = {
    id: number | null
    posicion: number | null
    valoracion_escala: Decimal | null
    evento_id: number | null
  }

  export type Events_resultadoMinAggregateOutputType = {
    id: number | null
    tiempo: Date | null
    posicion: number | null
    valoracion_escala: Decimal | null
    valoracion_deportista: string | null
    valoracion_entrenador: string | null
    evento_id: number | null
    deportista_id: string | null
  }

  export type Events_resultadoMaxAggregateOutputType = {
    id: number | null
    tiempo: Date | null
    posicion: number | null
    valoracion_escala: Decimal | null
    valoracion_deportista: string | null
    valoracion_entrenador: string | null
    evento_id: number | null
    deportista_id: string | null
  }

  export type Events_resultadoCountAggregateOutputType = {
    id: number
    tiempo: number
    posicion: number
    valoracion_escala: number
    valoracion_deportista: number
    valoracion_entrenador: number
    evento_id: number
    deportista_id: number
    _all: number
  }


  export type Events_resultadoAvgAggregateInputType = {
    id?: true
    posicion?: true
    valoracion_escala?: true
    evento_id?: true
  }

  export type Events_resultadoSumAggregateInputType = {
    id?: true
    posicion?: true
    valoracion_escala?: true
    evento_id?: true
  }

  export type Events_resultadoMinAggregateInputType = {
    id?: true
    tiempo?: true
    posicion?: true
    valoracion_escala?: true
    valoracion_deportista?: true
    valoracion_entrenador?: true
    evento_id?: true
    deportista_id?: true
  }

  export type Events_resultadoMaxAggregateInputType = {
    id?: true
    tiempo?: true
    posicion?: true
    valoracion_escala?: true
    valoracion_deportista?: true
    valoracion_entrenador?: true
    evento_id?: true
    deportista_id?: true
  }

  export type Events_resultadoCountAggregateInputType = {
    id?: true
    tiempo?: true
    posicion?: true
    valoracion_escala?: true
    valoracion_deportista?: true
    valoracion_entrenador?: true
    evento_id?: true
    deportista_id?: true
    _all?: true
  }

  export type Events_resultadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events_resultado to aggregate.
     */
    where?: events_resultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events_resultados to fetch.
     */
    orderBy?: events_resultadoOrderByWithRelationInput | events_resultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: events_resultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events_resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events_resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events_resultados
    **/
    _count?: true | Events_resultadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Events_resultadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Events_resultadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Events_resultadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Events_resultadoMaxAggregateInputType
  }

  export type GetEvents_resultadoAggregateType<T extends Events_resultadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents_resultado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents_resultado[P]>
      : GetScalarType<T[P], AggregateEvents_resultado[P]>
  }




  export type events_resultadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: events_resultadoWhereInput
    orderBy?: events_resultadoOrderByWithAggregationInput | events_resultadoOrderByWithAggregationInput[]
    by: Events_resultadoScalarFieldEnum[] | Events_resultadoScalarFieldEnum
    having?: events_resultadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Events_resultadoCountAggregateInputType | true
    _avg?: Events_resultadoAvgAggregateInputType
    _sum?: Events_resultadoSumAggregateInputType
    _min?: Events_resultadoMinAggregateInputType
    _max?: Events_resultadoMaxAggregateInputType
  }

  export type Events_resultadoGroupByOutputType = {
    id: number
    tiempo: Date | null
    posicion: number | null
    valoracion_escala: Decimal | null
    valoracion_deportista: string | null
    valoracion_entrenador: string | null
    evento_id: number | null
    deportista_id: string | null
    _count: Events_resultadoCountAggregateOutputType | null
    _avg: Events_resultadoAvgAggregateOutputType | null
    _sum: Events_resultadoSumAggregateOutputType | null
    _min: Events_resultadoMinAggregateOutputType | null
    _max: Events_resultadoMaxAggregateOutputType | null
  }

  type GetEvents_resultadoGroupByPayload<T extends events_resultadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Events_resultadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Events_resultadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Events_resultadoGroupByOutputType[P]>
            : GetScalarType<T[P], Events_resultadoGroupByOutputType[P]>
        }
      >
    >


  export type events_resultadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tiempo?: boolean
    posicion?: boolean
    valoracion_escala?: boolean
    valoracion_deportista?: boolean
    valoracion_entrenador?: boolean
    evento_id?: boolean
    deportista_id?: boolean
    events?: boolean | events_resultado$eventsArgs<ExtArgs>
    deportistas?: boolean | events_resultado$deportistasArgs<ExtArgs>
  }, ExtArgs["result"]["events_resultado"]>



  export type events_resultadoSelectScalar = {
    id?: boolean
    tiempo?: boolean
    posicion?: boolean
    valoracion_escala?: boolean
    valoracion_deportista?: boolean
    valoracion_entrenador?: boolean
    evento_id?: boolean
    deportista_id?: boolean
  }

  export type events_resultadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tiempo" | "posicion" | "valoracion_escala" | "valoracion_deportista" | "valoracion_entrenador" | "evento_id" | "deportista_id", ExtArgs["result"]["events_resultado"]>
  export type events_resultadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | events_resultado$eventsArgs<ExtArgs>
    deportistas?: boolean | events_resultado$deportistasArgs<ExtArgs>
  }

  export type $events_resultadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events_resultado"
    objects: {
      events: Prisma.$eventsPayload<ExtArgs> | null
      deportistas: Prisma.$deportistasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tiempo: Date | null
      posicion: number | null
      valoracion_escala: Prisma.Decimal | null
      valoracion_deportista: string | null
      valoracion_entrenador: string | null
      evento_id: number | null
      deportista_id: string | null
    }, ExtArgs["result"]["events_resultado"]>
    composites: {}
  }

  type events_resultadoGetPayload<S extends boolean | null | undefined | events_resultadoDefaultArgs> = $Result.GetResult<Prisma.$events_resultadoPayload, S>

  type events_resultadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<events_resultadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Events_resultadoCountAggregateInputType | true
    }

  export interface events_resultadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events_resultado'], meta: { name: 'events_resultado' } }
    /**
     * Find zero or one Events_resultado that matches the filter.
     * @param {events_resultadoFindUniqueArgs} args - Arguments to find a Events_resultado
     * @example
     * // Get one Events_resultado
     * const events_resultado = await prisma.events_resultado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends events_resultadoFindUniqueArgs>(args: SelectSubset<T, events_resultadoFindUniqueArgs<ExtArgs>>): Prisma__events_resultadoClient<$Result.GetResult<Prisma.$events_resultadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events_resultado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {events_resultadoFindUniqueOrThrowArgs} args - Arguments to find a Events_resultado
     * @example
     * // Get one Events_resultado
     * const events_resultado = await prisma.events_resultado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends events_resultadoFindUniqueOrThrowArgs>(args: SelectSubset<T, events_resultadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__events_resultadoClient<$Result.GetResult<Prisma.$events_resultadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events_resultado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {events_resultadoFindFirstArgs} args - Arguments to find a Events_resultado
     * @example
     * // Get one Events_resultado
     * const events_resultado = await prisma.events_resultado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends events_resultadoFindFirstArgs>(args?: SelectSubset<T, events_resultadoFindFirstArgs<ExtArgs>>): Prisma__events_resultadoClient<$Result.GetResult<Prisma.$events_resultadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events_resultado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {events_resultadoFindFirstOrThrowArgs} args - Arguments to find a Events_resultado
     * @example
     * // Get one Events_resultado
     * const events_resultado = await prisma.events_resultado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends events_resultadoFindFirstOrThrowArgs>(args?: SelectSubset<T, events_resultadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__events_resultadoClient<$Result.GetResult<Prisma.$events_resultadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events_resultados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {events_resultadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events_resultados
     * const events_resultados = await prisma.events_resultado.findMany()
     * 
     * // Get first 10 Events_resultados
     * const events_resultados = await prisma.events_resultado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const events_resultadoWithIdOnly = await prisma.events_resultado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends events_resultadoFindManyArgs>(args?: SelectSubset<T, events_resultadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$events_resultadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events_resultado.
     * @param {events_resultadoCreateArgs} args - Arguments to create a Events_resultado.
     * @example
     * // Create one Events_resultado
     * const Events_resultado = await prisma.events_resultado.create({
     *   data: {
     *     // ... data to create a Events_resultado
     *   }
     * })
     * 
     */
    create<T extends events_resultadoCreateArgs>(args: SelectSubset<T, events_resultadoCreateArgs<ExtArgs>>): Prisma__events_resultadoClient<$Result.GetResult<Prisma.$events_resultadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events_resultados.
     * @param {events_resultadoCreateManyArgs} args - Arguments to create many Events_resultados.
     * @example
     * // Create many Events_resultados
     * const events_resultado = await prisma.events_resultado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends events_resultadoCreateManyArgs>(args?: SelectSubset<T, events_resultadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Events_resultado.
     * @param {events_resultadoDeleteArgs} args - Arguments to delete one Events_resultado.
     * @example
     * // Delete one Events_resultado
     * const Events_resultado = await prisma.events_resultado.delete({
     *   where: {
     *     // ... filter to delete one Events_resultado
     *   }
     * })
     * 
     */
    delete<T extends events_resultadoDeleteArgs>(args: SelectSubset<T, events_resultadoDeleteArgs<ExtArgs>>): Prisma__events_resultadoClient<$Result.GetResult<Prisma.$events_resultadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events_resultado.
     * @param {events_resultadoUpdateArgs} args - Arguments to update one Events_resultado.
     * @example
     * // Update one Events_resultado
     * const events_resultado = await prisma.events_resultado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends events_resultadoUpdateArgs>(args: SelectSubset<T, events_resultadoUpdateArgs<ExtArgs>>): Prisma__events_resultadoClient<$Result.GetResult<Prisma.$events_resultadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events_resultados.
     * @param {events_resultadoDeleteManyArgs} args - Arguments to filter Events_resultados to delete.
     * @example
     * // Delete a few Events_resultados
     * const { count } = await prisma.events_resultado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends events_resultadoDeleteManyArgs>(args?: SelectSubset<T, events_resultadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events_resultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {events_resultadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events_resultados
     * const events_resultado = await prisma.events_resultado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends events_resultadoUpdateManyArgs>(args: SelectSubset<T, events_resultadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Events_resultado.
     * @param {events_resultadoUpsertArgs} args - Arguments to update or create a Events_resultado.
     * @example
     * // Update or create a Events_resultado
     * const events_resultado = await prisma.events_resultado.upsert({
     *   create: {
     *     // ... data to create a Events_resultado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events_resultado we want to update
     *   }
     * })
     */
    upsert<T extends events_resultadoUpsertArgs>(args: SelectSubset<T, events_resultadoUpsertArgs<ExtArgs>>): Prisma__events_resultadoClient<$Result.GetResult<Prisma.$events_resultadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events_resultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {events_resultadoCountArgs} args - Arguments to filter Events_resultados to count.
     * @example
     * // Count the number of Events_resultados
     * const count = await prisma.events_resultado.count({
     *   where: {
     *     // ... the filter for the Events_resultados we want to count
     *   }
     * })
    **/
    count<T extends events_resultadoCountArgs>(
      args?: Subset<T, events_resultadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Events_resultadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events_resultado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Events_resultadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Events_resultadoAggregateArgs>(args: Subset<T, Events_resultadoAggregateArgs>): Prisma.PrismaPromise<GetEvents_resultadoAggregateType<T>>

    /**
     * Group by Events_resultado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {events_resultadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends events_resultadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: events_resultadoGroupByArgs['orderBy'] }
        : { orderBy?: events_resultadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, events_resultadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvents_resultadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events_resultado model
   */
  readonly fields: events_resultadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events_resultado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__events_resultadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends events_resultado$eventsArgs<ExtArgs> = {}>(args?: Subset<T, events_resultado$eventsArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deportistas<T extends events_resultado$deportistasArgs<ExtArgs> = {}>(args?: Subset<T, events_resultado$deportistasArgs<ExtArgs>>): Prisma__deportistasClient<$Result.GetResult<Prisma.$deportistasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the events_resultado model
   */
  interface events_resultadoFieldRefs {
    readonly id: FieldRef<"events_resultado", 'Int'>
    readonly tiempo: FieldRef<"events_resultado", 'DateTime'>
    readonly posicion: FieldRef<"events_resultado", 'Int'>
    readonly valoracion_escala: FieldRef<"events_resultado", 'Decimal'>
    readonly valoracion_deportista: FieldRef<"events_resultado", 'String'>
    readonly valoracion_entrenador: FieldRef<"events_resultado", 'String'>
    readonly evento_id: FieldRef<"events_resultado", 'Int'>
    readonly deportista_id: FieldRef<"events_resultado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * events_resultado findUnique
   */
  export type events_resultadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_resultado
     */
    select?: events_resultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_resultado
     */
    omit?: events_resultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_resultadoInclude<ExtArgs> | null
    /**
     * Filter, which events_resultado to fetch.
     */
    where: events_resultadoWhereUniqueInput
  }

  /**
   * events_resultado findUniqueOrThrow
   */
  export type events_resultadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_resultado
     */
    select?: events_resultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_resultado
     */
    omit?: events_resultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_resultadoInclude<ExtArgs> | null
    /**
     * Filter, which events_resultado to fetch.
     */
    where: events_resultadoWhereUniqueInput
  }

  /**
   * events_resultado findFirst
   */
  export type events_resultadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_resultado
     */
    select?: events_resultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_resultado
     */
    omit?: events_resultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_resultadoInclude<ExtArgs> | null
    /**
     * Filter, which events_resultado to fetch.
     */
    where?: events_resultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events_resultados to fetch.
     */
    orderBy?: events_resultadoOrderByWithRelationInput | events_resultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events_resultados.
     */
    cursor?: events_resultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events_resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events_resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events_resultados.
     */
    distinct?: Events_resultadoScalarFieldEnum | Events_resultadoScalarFieldEnum[]
  }

  /**
   * events_resultado findFirstOrThrow
   */
  export type events_resultadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_resultado
     */
    select?: events_resultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_resultado
     */
    omit?: events_resultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_resultadoInclude<ExtArgs> | null
    /**
     * Filter, which events_resultado to fetch.
     */
    where?: events_resultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events_resultados to fetch.
     */
    orderBy?: events_resultadoOrderByWithRelationInput | events_resultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events_resultados.
     */
    cursor?: events_resultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events_resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events_resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events_resultados.
     */
    distinct?: Events_resultadoScalarFieldEnum | Events_resultadoScalarFieldEnum[]
  }

  /**
   * events_resultado findMany
   */
  export type events_resultadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_resultado
     */
    select?: events_resultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_resultado
     */
    omit?: events_resultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_resultadoInclude<ExtArgs> | null
    /**
     * Filter, which events_resultados to fetch.
     */
    where?: events_resultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events_resultados to fetch.
     */
    orderBy?: events_resultadoOrderByWithRelationInput | events_resultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events_resultados.
     */
    cursor?: events_resultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events_resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events_resultados.
     */
    skip?: number
    distinct?: Events_resultadoScalarFieldEnum | Events_resultadoScalarFieldEnum[]
  }

  /**
   * events_resultado create
   */
  export type events_resultadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_resultado
     */
    select?: events_resultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_resultado
     */
    omit?: events_resultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_resultadoInclude<ExtArgs> | null
    /**
     * The data needed to create a events_resultado.
     */
    data: XOR<events_resultadoCreateInput, events_resultadoUncheckedCreateInput>
  }

  /**
   * events_resultado createMany
   */
  export type events_resultadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events_resultados.
     */
    data: events_resultadoCreateManyInput | events_resultadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events_resultado update
   */
  export type events_resultadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_resultado
     */
    select?: events_resultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_resultado
     */
    omit?: events_resultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_resultadoInclude<ExtArgs> | null
    /**
     * The data needed to update a events_resultado.
     */
    data: XOR<events_resultadoUpdateInput, events_resultadoUncheckedUpdateInput>
    /**
     * Choose, which events_resultado to update.
     */
    where: events_resultadoWhereUniqueInput
  }

  /**
   * events_resultado updateMany
   */
  export type events_resultadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events_resultados.
     */
    data: XOR<events_resultadoUpdateManyMutationInput, events_resultadoUncheckedUpdateManyInput>
    /**
     * Filter which events_resultados to update
     */
    where?: events_resultadoWhereInput
    /**
     * Limit how many events_resultados to update.
     */
    limit?: number
  }

  /**
   * events_resultado upsert
   */
  export type events_resultadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_resultado
     */
    select?: events_resultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_resultado
     */
    omit?: events_resultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_resultadoInclude<ExtArgs> | null
    /**
     * The filter to search for the events_resultado to update in case it exists.
     */
    where: events_resultadoWhereUniqueInput
    /**
     * In case the events_resultado found by the `where` argument doesn't exist, create a new events_resultado with this data.
     */
    create: XOR<events_resultadoCreateInput, events_resultadoUncheckedCreateInput>
    /**
     * In case the events_resultado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<events_resultadoUpdateInput, events_resultadoUncheckedUpdateInput>
  }

  /**
   * events_resultado delete
   */
  export type events_resultadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_resultado
     */
    select?: events_resultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_resultado
     */
    omit?: events_resultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_resultadoInclude<ExtArgs> | null
    /**
     * Filter which events_resultado to delete.
     */
    where: events_resultadoWhereUniqueInput
  }

  /**
   * events_resultado deleteMany
   */
  export type events_resultadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events_resultados to delete
     */
    where?: events_resultadoWhereInput
    /**
     * Limit how many events_resultados to delete.
     */
    limit?: number
  }

  /**
   * events_resultado.events
   */
  export type events_resultado$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
  }

  /**
   * events_resultado.deportistas
   */
  export type events_resultado$deportistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deportistas
     */
    select?: deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deportistas
     */
    omit?: deportistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deportistasInclude<ExtArgs> | null
    where?: deportistasWhereInput
  }

  /**
   * events_resultado without action
   */
  export type events_resultadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_resultado
     */
    select?: events_resultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_resultado
     */
    omit?: events_resultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_resultadoInclude<ExtArgs> | null
  }


  /**
   * Model session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    impersonatedBy: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which session to aggregate.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type sessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionWhereInput
    orderBy?: sessionOrderByWithAggregationInput | sessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: sessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    impersonatedBy: string | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends sessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type sessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
  }, ExtArgs["result"]["session"]>



  export type sessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
  }

  export type sessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId" | "impersonatedBy", ExtArgs["result"]["session"]>

  export type $sessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
      impersonatedBy: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type sessionGetPayload<S extends boolean | null | undefined | sessionDefaultArgs> = $Result.GetResult<Prisma.$sessionPayload, S>

  type sessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface sessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['session'], meta: { name: 'session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {sessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionFindUniqueArgs>(args: SelectSubset<T, sessionFindUniqueArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionFindFirstArgs>(args?: SelectSubset<T, sessionFindFirstArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionFindManyArgs>(args?: SelectSubset<T, sessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {sessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends sessionCreateArgs>(args: SelectSubset<T, sessionCreateArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionCreateManyArgs>(args?: SelectSubset<T, sessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {sessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends sessionDeleteArgs>(args: SelectSubset<T, sessionDeleteArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {sessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionUpdateArgs>(args: SelectSubset<T, sessionUpdateArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionDeleteManyArgs>(args?: SelectSubset<T, sessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionUpdateManyArgs>(args: SelectSubset<T, sessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {sessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends sessionUpsertArgs>(args: SelectSubset<T, sessionUpsertArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionCountArgs>(
      args?: Subset<T, sessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionGroupByArgs['orderBy'] }
        : { orderBy?: sessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the session model
   */
  readonly fields: sessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the session model
   */
  interface sessionFieldRefs {
    readonly id: FieldRef<"session", 'String'>
    readonly expiresAt: FieldRef<"session", 'DateTime'>
    readonly token: FieldRef<"session", 'String'>
    readonly createdAt: FieldRef<"session", 'DateTime'>
    readonly updatedAt: FieldRef<"session", 'DateTime'>
    readonly ipAddress: FieldRef<"session", 'String'>
    readonly userAgent: FieldRef<"session", 'String'>
    readonly userId: FieldRef<"session", 'String'>
    readonly impersonatedBy: FieldRef<"session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * session findUnique
   */
  export type sessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session findUniqueOrThrow
   */
  export type sessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session findFirst
   */
  export type sessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session findFirstOrThrow
   */
  export type sessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session findMany
   */
  export type sessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session create
   */
  export type sessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * The data needed to create a session.
     */
    data: XOR<sessionCreateInput, sessionUncheckedCreateInput>
  }

  /**
   * session createMany
   */
  export type sessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionCreateManyInput | sessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * session update
   */
  export type sessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * The data needed to update a session.
     */
    data: XOR<sessionUpdateInput, sessionUncheckedUpdateInput>
    /**
     * Choose, which session to update.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session updateMany
   */
  export type sessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionUpdateManyMutationInput, sessionUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * session upsert
   */
  export type sessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * The filter to search for the session to update in case it exists.
     */
    where: sessionWhereUniqueInput
    /**
     * In case the session found by the `where` argument doesn't exist, create a new session with this data.
     */
    create: XOR<sessionCreateInput, sessionUncheckedCreateInput>
    /**
     * In case the session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionUpdateInput, sessionUncheckedUpdateInput>
  }

  /**
   * session delete
   */
  export type sessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Filter which session to delete.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session deleteMany
   */
  export type sessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * session without action
   */
  export type sessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    emailVerified: number | null
    banned: number | null
  }

  export type UserSumAggregateOutputType = {
    emailVerified: number | null
    banned: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: number | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.user_role | null
    banned: number | null
    banReason: string | null
    banExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: number | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.user_role | null
    banned: number | null
    banReason: string | null
    banExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    role: number
    banned: number
    banReason: number
    banExpires: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    emailVerified?: true
    banned?: true
  }

  export type UserSumAggregateInputType = {
    emailVerified?: true
    banned?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: number
    image: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.user_role | null
    banned: number | null
    banReason: string | null
    banExpires: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    deportistas?: boolean | user$deportistasArgs<ExtArgs>
    entrenadores?: boolean | user$entrenadoresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "role" | "banned" | "banReason" | "banExpires", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deportistas?: boolean | user$deportistasArgs<ExtArgs>
    entrenadores?: boolean | user$entrenadoresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      deportistas: Prisma.$deportistasPayload<ExtArgs>[]
      entrenadores: Prisma.$entrenadoresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: number
      image: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.user_role | null
      banned: number | null
      banReason: string | null
      banExpires: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deportistas<T extends user$deportistasArgs<ExtArgs> = {}>(args?: Subset<T, user$deportistasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deportistasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    entrenadores<T extends user$entrenadoresArgs<ExtArgs> = {}>(args?: Subset<T, user$entrenadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly emailVerified: FieldRef<"user", 'Int'>
    readonly image: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
    readonly role: FieldRef<"user", 'user_role'>
    readonly banned: FieldRef<"user", 'Int'>
    readonly banReason: FieldRef<"user", 'String'>
    readonly banExpires: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.deportistas
   */
  export type user$deportistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deportistas
     */
    select?: deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deportistas
     */
    omit?: deportistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deportistasInclude<ExtArgs> | null
    where?: deportistasWhereInput
    orderBy?: deportistasOrderByWithRelationInput | deportistasOrderByWithRelationInput[]
    cursor?: deportistasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeportistasScalarFieldEnum | DeportistasScalarFieldEnum[]
  }

  /**
   * user.entrenadores
   */
  export type user$entrenadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    where?: entrenadoresWhereInput
    orderBy?: entrenadoresOrderByWithRelationInput | entrenadoresOrderByWithRelationInput[]
    cursor?: entrenadoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntrenadoresScalarFieldEnum | EntrenadoresScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verification to aggregate.
     */
    where?: verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: verificationOrderByWithRelationInput | verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type verificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verificationWhereInput
    orderBy?: verificationOrderByWithAggregationInput | verificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: verificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends verificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type verificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>



  export type verificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type verificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $verificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type verificationGetPayload<S extends boolean | null | undefined | verificationDefaultArgs> = $Result.GetResult<Prisma.$verificationPayload, S>

  type verificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<verificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface verificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verification'], meta: { name: 'verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {verificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends verificationFindUniqueArgs>(args: SelectSubset<T, verificationFindUniqueArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {verificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends verificationFindUniqueOrThrowArgs>(args: SelectSubset<T, verificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends verificationFindFirstArgs>(args?: SelectSubset<T, verificationFindFirstArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends verificationFindFirstOrThrowArgs>(args?: SelectSubset<T, verificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends verificationFindManyArgs>(args?: SelectSubset<T, verificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {verificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends verificationCreateArgs>(args: SelectSubset<T, verificationCreateArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {verificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends verificationCreateManyArgs>(args?: SelectSubset<T, verificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Verification.
     * @param {verificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends verificationDeleteArgs>(args: SelectSubset<T, verificationDeleteArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {verificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends verificationUpdateArgs>(args: SelectSubset<T, verificationUpdateArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {verificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends verificationDeleteManyArgs>(args?: SelectSubset<T, verificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends verificationUpdateManyArgs>(args: SelectSubset<T, verificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification.
     * @param {verificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends verificationUpsertArgs>(args: SelectSubset<T, verificationUpsertArgs<ExtArgs>>): Prisma__verificationClient<$Result.GetResult<Prisma.$verificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends verificationCountArgs>(
      args?: Subset<T, verificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends verificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: verificationGroupByArgs['orderBy'] }
        : { orderBy?: verificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, verificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verification model
   */
  readonly fields: verificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__verificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the verification model
   */
  interface verificationFieldRefs {
    readonly id: FieldRef<"verification", 'String'>
    readonly identifier: FieldRef<"verification", 'String'>
    readonly value: FieldRef<"verification", 'String'>
    readonly expiresAt: FieldRef<"verification", 'DateTime'>
    readonly createdAt: FieldRef<"verification", 'DateTime'>
    readonly updatedAt: FieldRef<"verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * verification findUnique
   */
  export type verificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * Filter, which verification to fetch.
     */
    where: verificationWhereUniqueInput
  }

  /**
   * verification findUniqueOrThrow
   */
  export type verificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * Filter, which verification to fetch.
     */
    where: verificationWhereUniqueInput
  }

  /**
   * verification findFirst
   */
  export type verificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * Filter, which verification to fetch.
     */
    where?: verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: verificationOrderByWithRelationInput | verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verifications.
     */
    cursor?: verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * verification findFirstOrThrow
   */
  export type verificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * Filter, which verification to fetch.
     */
    where?: verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: verificationOrderByWithRelationInput | verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verifications.
     */
    cursor?: verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * verification findMany
   */
  export type verificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * Filter, which verifications to fetch.
     */
    where?: verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: verificationOrderByWithRelationInput | verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verifications.
     */
    cursor?: verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * verification create
   */
  export type verificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * The data needed to create a verification.
     */
    data: XOR<verificationCreateInput, verificationUncheckedCreateInput>
  }

  /**
   * verification createMany
   */
  export type verificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verifications.
     */
    data: verificationCreateManyInput | verificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verification update
   */
  export type verificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * The data needed to update a verification.
     */
    data: XOR<verificationUpdateInput, verificationUncheckedUpdateInput>
    /**
     * Choose, which verification to update.
     */
    where: verificationWhereUniqueInput
  }

  /**
   * verification updateMany
   */
  export type verificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verifications.
     */
    data: XOR<verificationUpdateManyMutationInput, verificationUncheckedUpdateManyInput>
    /**
     * Filter which verifications to update
     */
    where?: verificationWhereInput
    /**
     * Limit how many verifications to update.
     */
    limit?: number
  }

  /**
   * verification upsert
   */
  export type verificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * The filter to search for the verification to update in case it exists.
     */
    where: verificationWhereUniqueInput
    /**
     * In case the verification found by the `where` argument doesn't exist, create a new verification with this data.
     */
    create: XOR<verificationCreateInput, verificationUncheckedCreateInput>
    /**
     * In case the verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verificationUpdateInput, verificationUncheckedUpdateInput>
  }

  /**
   * verification delete
   */
  export type verificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
    /**
     * Filter which verification to delete.
     */
    where: verificationWhereUniqueInput
  }

  /**
   * verification deleteMany
   */
  export type verificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verifications to delete
     */
    where?: verificationWhereInput
    /**
     * Limit how many verifications to delete.
     */
    limit?: number
  }

  /**
   * verification without action
   */
  export type verificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification
     */
    omit?: verificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const DeportistasScalarFieldEnum: {
    numero_licencia: 'numero_licencia',
    nombre: 'nombre',
    apellidos: 'apellidos',
    dni: 'dni',
    telefono: 'telefono',
    fecha_nacimiento: 'fecha_nacimiento',
    peso: 'peso',
    altura: 'altura',
    ftp: 'ftp',
    pulso: 'pulso',
    user_id: 'user_id'
  };

  export type DeportistasScalarFieldEnum = (typeof DeportistasScalarFieldEnum)[keyof typeof DeportistasScalarFieldEnum]


  export const EntrenadoresScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellidos: 'apellidos',
    dni: 'dni',
    telefono: 'telefono',
    fecha_nacimiento: 'fecha_nacimiento',
    user_id: 'user_id',
    deportista_id: 'deportista_id'
  };

  export type EntrenadoresScalarFieldEnum = (typeof EntrenadoresScalarFieldEnum)[keyof typeof EntrenadoresScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    fecha: 'fecha',
    lugar: 'lugar',
    categoria: 'categoria',
    modalidad: 'modalidad',
    descripcion: 'descripcion'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const Events_resultadoScalarFieldEnum: {
    id: 'id',
    tiempo: 'tiempo',
    posicion: 'posicion',
    valoracion_escala: 'valoracion_escala',
    valoracion_deportista: 'valoracion_deportista',
    valoracion_entrenador: 'valoracion_entrenador',
    evento_id: 'evento_id',
    deportista_id: 'deportista_id'
  };

  export type Events_resultadoScalarFieldEnum = (typeof Events_resultadoScalarFieldEnum)[keyof typeof Events_resultadoScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId',
    impersonatedBy: 'impersonatedBy'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    banned: 'banned',
    banReason: 'banReason',
    banExpires: 'banExpires'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const accountOrderByRelevanceFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    scope: 'scope',
    password: 'password'
  };

  export type accountOrderByRelevanceFieldEnum = (typeof accountOrderByRelevanceFieldEnum)[keyof typeof accountOrderByRelevanceFieldEnum]


  export const deportistasOrderByRelevanceFieldEnum: {
    numero_licencia: 'numero_licencia',
    nombre: 'nombre',
    apellidos: 'apellidos',
    dni: 'dni',
    user_id: 'user_id'
  };

  export type deportistasOrderByRelevanceFieldEnum = (typeof deportistasOrderByRelevanceFieldEnum)[keyof typeof deportistasOrderByRelevanceFieldEnum]


  export const entrenadoresOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    apellidos: 'apellidos',
    dni: 'dni',
    user_id: 'user_id',
    deportista_id: 'deportista_id'
  };

  export type entrenadoresOrderByRelevanceFieldEnum = (typeof entrenadoresOrderByRelevanceFieldEnum)[keyof typeof entrenadoresOrderByRelevanceFieldEnum]


  export const eventsOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    lugar: 'lugar',
    descripcion: 'descripcion'
  };

  export type eventsOrderByRelevanceFieldEnum = (typeof eventsOrderByRelevanceFieldEnum)[keyof typeof eventsOrderByRelevanceFieldEnum]


  export const events_resultadoOrderByRelevanceFieldEnum: {
    valoracion_deportista: 'valoracion_deportista',
    valoracion_entrenador: 'valoracion_entrenador',
    deportista_id: 'deportista_id'
  };

  export type events_resultadoOrderByRelevanceFieldEnum = (typeof events_resultadoOrderByRelevanceFieldEnum)[keyof typeof events_resultadoOrderByRelevanceFieldEnum]


  export const sessionOrderByRelevanceFieldEnum: {
    id: 'id',
    token: 'token',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId',
    impersonatedBy: 'impersonatedBy'
  };

  export type sessionOrderByRelevanceFieldEnum = (typeof sessionOrderByRelevanceFieldEnum)[keyof typeof sessionOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    banReason: 'banReason'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const verificationOrderByRelevanceFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value'
  };

  export type verificationOrderByRelevanceFieldEnum = (typeof verificationOrderByRelevanceFieldEnum)[keyof typeof verificationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'events_categoria'
   */
  export type Enumevents_categoriaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'events_categoria'>
    


  /**
   * Reference to a field of type 'events_modalidad'
   */
  export type Enumevents_modalidadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'events_modalidad'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type accountWhereInput = {
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    id?: StringFilter<"account"> | string
    accountId?: StringFilter<"account"> | string
    providerId?: StringFilter<"account"> | string
    userId?: StringFilter<"account"> | string
    accessToken?: StringNullableFilter<"account"> | string | null
    refreshToken?: StringNullableFilter<"account"> | string | null
    idToken?: StringNullableFilter<"account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"account"> | Date | string | null
    scope?: StringNullableFilter<"account"> | string | null
    password?: StringNullableFilter<"account"> | string | null
    createdAt?: DateTimeFilter<"account"> | Date | string
    updatedAt?: DateTimeFilter<"account"> | Date | string
  }

  export type accountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: accountOrderByRelevanceInput
  }

  export type accountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    accountId?: StringFilter<"account"> | string
    providerId?: StringFilter<"account"> | string
    userId?: StringFilter<"account"> | string
    accessToken?: StringNullableFilter<"account"> | string | null
    refreshToken?: StringNullableFilter<"account"> | string | null
    idToken?: StringNullableFilter<"account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"account"> | Date | string | null
    scope?: StringNullableFilter<"account"> | string | null
    password?: StringNullableFilter<"account"> | string | null
    createdAt?: DateTimeFilter<"account"> | Date | string
    updatedAt?: DateTimeFilter<"account"> | Date | string
  }, "id">

  export type accountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: accountCountOrderByAggregateInput
    _max?: accountMaxOrderByAggregateInput
    _min?: accountMinOrderByAggregateInput
  }

  export type accountScalarWhereWithAggregatesInput = {
    AND?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    OR?: accountScalarWhereWithAggregatesInput[]
    NOT?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"account"> | string
    accountId?: StringWithAggregatesFilter<"account"> | string
    providerId?: StringWithAggregatesFilter<"account"> | string
    userId?: StringWithAggregatesFilter<"account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"account"> | string | null
    password?: StringNullableWithAggregatesFilter<"account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"account"> | Date | string
  }

  export type deportistasWhereInput = {
    AND?: deportistasWhereInput | deportistasWhereInput[]
    OR?: deportistasWhereInput[]
    NOT?: deportistasWhereInput | deportistasWhereInput[]
    numero_licencia?: StringFilter<"deportistas"> | string
    nombre?: StringNullableFilter<"deportistas"> | string | null
    apellidos?: StringNullableFilter<"deportistas"> | string | null
    dni?: StringNullableFilter<"deportistas"> | string | null
    telefono?: BigIntNullableFilter<"deportistas"> | bigint | number | null
    fecha_nacimiento?: DateTimeNullableFilter<"deportistas"> | Date | string | null
    peso?: DecimalNullableFilter<"deportistas"> | Decimal | DecimalJsLike | number | string | null
    altura?: DecimalNullableFilter<"deportistas"> | Decimal | DecimalJsLike | number | string | null
    ftp?: DecimalNullableFilter<"deportistas"> | Decimal | DecimalJsLike | number | string | null
    pulso?: IntNullableFilter<"deportistas"> | number | null
    user_id?: StringNullableFilter<"deportistas"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    entrenadores?: EntrenadoresListRelationFilter
    events_resultado?: Events_resultadoListRelationFilter
  }

  export type deportistasOrderByWithRelationInput = {
    numero_licencia?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    altura?: SortOrderInput | SortOrder
    ftp?: SortOrderInput | SortOrder
    pulso?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    entrenadores?: entrenadoresOrderByRelationAggregateInput
    events_resultado?: events_resultadoOrderByRelationAggregateInput
    _relevance?: deportistasOrderByRelevanceInput
  }

  export type deportistasWhereUniqueInput = Prisma.AtLeast<{
    numero_licencia?: string
    AND?: deportistasWhereInput | deportistasWhereInput[]
    OR?: deportistasWhereInput[]
    NOT?: deportistasWhereInput | deportistasWhereInput[]
    nombre?: StringNullableFilter<"deportistas"> | string | null
    apellidos?: StringNullableFilter<"deportistas"> | string | null
    dni?: StringNullableFilter<"deportistas"> | string | null
    telefono?: BigIntNullableFilter<"deportistas"> | bigint | number | null
    fecha_nacimiento?: DateTimeNullableFilter<"deportistas"> | Date | string | null
    peso?: DecimalNullableFilter<"deportistas"> | Decimal | DecimalJsLike | number | string | null
    altura?: DecimalNullableFilter<"deportistas"> | Decimal | DecimalJsLike | number | string | null
    ftp?: DecimalNullableFilter<"deportistas"> | Decimal | DecimalJsLike | number | string | null
    pulso?: IntNullableFilter<"deportistas"> | number | null
    user_id?: StringNullableFilter<"deportistas"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    entrenadores?: EntrenadoresListRelationFilter
    events_resultado?: Events_resultadoListRelationFilter
  }, "numero_licencia">

  export type deportistasOrderByWithAggregationInput = {
    numero_licencia?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    altura?: SortOrderInput | SortOrder
    ftp?: SortOrderInput | SortOrder
    pulso?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: deportistasCountOrderByAggregateInput
    _avg?: deportistasAvgOrderByAggregateInput
    _max?: deportistasMaxOrderByAggregateInput
    _min?: deportistasMinOrderByAggregateInput
    _sum?: deportistasSumOrderByAggregateInput
  }

  export type deportistasScalarWhereWithAggregatesInput = {
    AND?: deportistasScalarWhereWithAggregatesInput | deportistasScalarWhereWithAggregatesInput[]
    OR?: deportistasScalarWhereWithAggregatesInput[]
    NOT?: deportistasScalarWhereWithAggregatesInput | deportistasScalarWhereWithAggregatesInput[]
    numero_licencia?: StringWithAggregatesFilter<"deportistas"> | string
    nombre?: StringNullableWithAggregatesFilter<"deportistas"> | string | null
    apellidos?: StringNullableWithAggregatesFilter<"deportistas"> | string | null
    dni?: StringNullableWithAggregatesFilter<"deportistas"> | string | null
    telefono?: BigIntNullableWithAggregatesFilter<"deportistas"> | bigint | number | null
    fecha_nacimiento?: DateTimeNullableWithAggregatesFilter<"deportistas"> | Date | string | null
    peso?: DecimalNullableWithAggregatesFilter<"deportistas"> | Decimal | DecimalJsLike | number | string | null
    altura?: DecimalNullableWithAggregatesFilter<"deportistas"> | Decimal | DecimalJsLike | number | string | null
    ftp?: DecimalNullableWithAggregatesFilter<"deportistas"> | Decimal | DecimalJsLike | number | string | null
    pulso?: IntNullableWithAggregatesFilter<"deportistas"> | number | null
    user_id?: StringNullableWithAggregatesFilter<"deportistas"> | string | null
  }

  export type entrenadoresWhereInput = {
    AND?: entrenadoresWhereInput | entrenadoresWhereInput[]
    OR?: entrenadoresWhereInput[]
    NOT?: entrenadoresWhereInput | entrenadoresWhereInput[]
    id?: IntFilter<"entrenadores"> | number
    nombre?: StringNullableFilter<"entrenadores"> | string | null
    apellidos?: StringNullableFilter<"entrenadores"> | string | null
    dni?: StringNullableFilter<"entrenadores"> | string | null
    telefono?: BigIntNullableFilter<"entrenadores"> | bigint | number | null
    fecha_nacimiento?: DateTimeNullableFilter<"entrenadores"> | Date | string | null
    user_id?: StringNullableFilter<"entrenadores"> | string | null
    deportista_id?: StringNullableFilter<"entrenadores"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    deportistas?: XOR<DeportistasNullableScalarRelationFilter, deportistasWhereInput> | null
  }

  export type entrenadoresOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    deportista_id?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    deportistas?: deportistasOrderByWithRelationInput
    _relevance?: entrenadoresOrderByRelevanceInput
  }

  export type entrenadoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: entrenadoresWhereInput | entrenadoresWhereInput[]
    OR?: entrenadoresWhereInput[]
    NOT?: entrenadoresWhereInput | entrenadoresWhereInput[]
    nombre?: StringNullableFilter<"entrenadores"> | string | null
    apellidos?: StringNullableFilter<"entrenadores"> | string | null
    dni?: StringNullableFilter<"entrenadores"> | string | null
    telefono?: BigIntNullableFilter<"entrenadores"> | bigint | number | null
    fecha_nacimiento?: DateTimeNullableFilter<"entrenadores"> | Date | string | null
    user_id?: StringNullableFilter<"entrenadores"> | string | null
    deportista_id?: StringNullableFilter<"entrenadores"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    deportistas?: XOR<DeportistasNullableScalarRelationFilter, deportistasWhereInput> | null
  }, "id">

  export type entrenadoresOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    deportista_id?: SortOrderInput | SortOrder
    _count?: entrenadoresCountOrderByAggregateInput
    _avg?: entrenadoresAvgOrderByAggregateInput
    _max?: entrenadoresMaxOrderByAggregateInput
    _min?: entrenadoresMinOrderByAggregateInput
    _sum?: entrenadoresSumOrderByAggregateInput
  }

  export type entrenadoresScalarWhereWithAggregatesInput = {
    AND?: entrenadoresScalarWhereWithAggregatesInput | entrenadoresScalarWhereWithAggregatesInput[]
    OR?: entrenadoresScalarWhereWithAggregatesInput[]
    NOT?: entrenadoresScalarWhereWithAggregatesInput | entrenadoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"entrenadores"> | number
    nombre?: StringNullableWithAggregatesFilter<"entrenadores"> | string | null
    apellidos?: StringNullableWithAggregatesFilter<"entrenadores"> | string | null
    dni?: StringNullableWithAggregatesFilter<"entrenadores"> | string | null
    telefono?: BigIntNullableWithAggregatesFilter<"entrenadores"> | bigint | number | null
    fecha_nacimiento?: DateTimeNullableWithAggregatesFilter<"entrenadores"> | Date | string | null
    user_id?: StringNullableWithAggregatesFilter<"entrenadores"> | string | null
    deportista_id?: StringNullableWithAggregatesFilter<"entrenadores"> | string | null
  }

  export type eventsWhereInput = {
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    id?: IntFilter<"events"> | number
    nombre?: StringNullableFilter<"events"> | string | null
    fecha?: DateTimeNullableFilter<"events"> | Date | string | null
    lugar?: StringNullableFilter<"events"> | string | null
    categoria?: Enumevents_categoriaNullableFilter<"events"> | $Enums.events_categoria | null
    modalidad?: Enumevents_modalidadNullableFilter<"events"> | $Enums.events_modalidad | null
    descripcion?: StringNullableFilter<"events"> | string | null
    events_resultado?: Events_resultadoListRelationFilter
  }

  export type eventsOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    lugar?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    modalidad?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    events_resultado?: events_resultadoOrderByRelationAggregateInput
    _relevance?: eventsOrderByRelevanceInput
  }

  export type eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    nombre?: StringNullableFilter<"events"> | string | null
    fecha?: DateTimeNullableFilter<"events"> | Date | string | null
    lugar?: StringNullableFilter<"events"> | string | null
    categoria?: Enumevents_categoriaNullableFilter<"events"> | $Enums.events_categoria | null
    modalidad?: Enumevents_modalidadNullableFilter<"events"> | $Enums.events_modalidad | null
    descripcion?: StringNullableFilter<"events"> | string | null
    events_resultado?: Events_resultadoListRelationFilter
  }, "id">

  export type eventsOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    lugar?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    modalidad?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: eventsCountOrderByAggregateInput
    _avg?: eventsAvgOrderByAggregateInput
    _max?: eventsMaxOrderByAggregateInput
    _min?: eventsMinOrderByAggregateInput
    _sum?: eventsSumOrderByAggregateInput
  }

  export type eventsScalarWhereWithAggregatesInput = {
    AND?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    OR?: eventsScalarWhereWithAggregatesInput[]
    NOT?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"events"> | number
    nombre?: StringNullableWithAggregatesFilter<"events"> | string | null
    fecha?: DateTimeNullableWithAggregatesFilter<"events"> | Date | string | null
    lugar?: StringNullableWithAggregatesFilter<"events"> | string | null
    categoria?: Enumevents_categoriaNullableWithAggregatesFilter<"events"> | $Enums.events_categoria | null
    modalidad?: Enumevents_modalidadNullableWithAggregatesFilter<"events"> | $Enums.events_modalidad | null
    descripcion?: StringNullableWithAggregatesFilter<"events"> | string | null
  }

  export type events_resultadoWhereInput = {
    AND?: events_resultadoWhereInput | events_resultadoWhereInput[]
    OR?: events_resultadoWhereInput[]
    NOT?: events_resultadoWhereInput | events_resultadoWhereInput[]
    id?: IntFilter<"events_resultado"> | number
    tiempo?: DateTimeNullableFilter<"events_resultado"> | Date | string | null
    posicion?: IntNullableFilter<"events_resultado"> | number | null
    valoracion_escala?: DecimalNullableFilter<"events_resultado"> | Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: StringNullableFilter<"events_resultado"> | string | null
    valoracion_entrenador?: StringNullableFilter<"events_resultado"> | string | null
    evento_id?: IntNullableFilter<"events_resultado"> | number | null
    deportista_id?: StringNullableFilter<"events_resultado"> | string | null
    events?: XOR<EventsNullableScalarRelationFilter, eventsWhereInput> | null
    deportistas?: XOR<DeportistasNullableScalarRelationFilter, deportistasWhereInput> | null
  }

  export type events_resultadoOrderByWithRelationInput = {
    id?: SortOrder
    tiempo?: SortOrderInput | SortOrder
    posicion?: SortOrderInput | SortOrder
    valoracion_escala?: SortOrderInput | SortOrder
    valoracion_deportista?: SortOrderInput | SortOrder
    valoracion_entrenador?: SortOrderInput | SortOrder
    evento_id?: SortOrderInput | SortOrder
    deportista_id?: SortOrderInput | SortOrder
    events?: eventsOrderByWithRelationInput
    deportistas?: deportistasOrderByWithRelationInput
    _relevance?: events_resultadoOrderByRelevanceInput
  }

  export type events_resultadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: events_resultadoWhereInput | events_resultadoWhereInput[]
    OR?: events_resultadoWhereInput[]
    NOT?: events_resultadoWhereInput | events_resultadoWhereInput[]
    tiempo?: DateTimeNullableFilter<"events_resultado"> | Date | string | null
    posicion?: IntNullableFilter<"events_resultado"> | number | null
    valoracion_escala?: DecimalNullableFilter<"events_resultado"> | Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: StringNullableFilter<"events_resultado"> | string | null
    valoracion_entrenador?: StringNullableFilter<"events_resultado"> | string | null
    evento_id?: IntNullableFilter<"events_resultado"> | number | null
    deportista_id?: StringNullableFilter<"events_resultado"> | string | null
    events?: XOR<EventsNullableScalarRelationFilter, eventsWhereInput> | null
    deportistas?: XOR<DeportistasNullableScalarRelationFilter, deportistasWhereInput> | null
  }, "id">

  export type events_resultadoOrderByWithAggregationInput = {
    id?: SortOrder
    tiempo?: SortOrderInput | SortOrder
    posicion?: SortOrderInput | SortOrder
    valoracion_escala?: SortOrderInput | SortOrder
    valoracion_deportista?: SortOrderInput | SortOrder
    valoracion_entrenador?: SortOrderInput | SortOrder
    evento_id?: SortOrderInput | SortOrder
    deportista_id?: SortOrderInput | SortOrder
    _count?: events_resultadoCountOrderByAggregateInput
    _avg?: events_resultadoAvgOrderByAggregateInput
    _max?: events_resultadoMaxOrderByAggregateInput
    _min?: events_resultadoMinOrderByAggregateInput
    _sum?: events_resultadoSumOrderByAggregateInput
  }

  export type events_resultadoScalarWhereWithAggregatesInput = {
    AND?: events_resultadoScalarWhereWithAggregatesInput | events_resultadoScalarWhereWithAggregatesInput[]
    OR?: events_resultadoScalarWhereWithAggregatesInput[]
    NOT?: events_resultadoScalarWhereWithAggregatesInput | events_resultadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"events_resultado"> | number
    tiempo?: DateTimeNullableWithAggregatesFilter<"events_resultado"> | Date | string | null
    posicion?: IntNullableWithAggregatesFilter<"events_resultado"> | number | null
    valoracion_escala?: DecimalNullableWithAggregatesFilter<"events_resultado"> | Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: StringNullableWithAggregatesFilter<"events_resultado"> | string | null
    valoracion_entrenador?: StringNullableWithAggregatesFilter<"events_resultado"> | string | null
    evento_id?: IntNullableWithAggregatesFilter<"events_resultado"> | number | null
    deportista_id?: StringNullableWithAggregatesFilter<"events_resultado"> | string | null
  }

  export type sessionWhereInput = {
    AND?: sessionWhereInput | sessionWhereInput[]
    OR?: sessionWhereInput[]
    NOT?: sessionWhereInput | sessionWhereInput[]
    id?: StringFilter<"session"> | string
    expiresAt?: DateTimeFilter<"session"> | Date | string
    token?: StringFilter<"session"> | string
    createdAt?: DateTimeFilter<"session"> | Date | string
    updatedAt?: DateTimeFilter<"session"> | Date | string
    ipAddress?: StringNullableFilter<"session"> | string | null
    userAgent?: StringNullableFilter<"session"> | string | null
    userId?: StringFilter<"session"> | string
    impersonatedBy?: StringNullableFilter<"session"> | string | null
  }

  export type sessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    _relevance?: sessionOrderByRelevanceInput
  }

  export type sessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: sessionWhereInput | sessionWhereInput[]
    OR?: sessionWhereInput[]
    NOT?: sessionWhereInput | sessionWhereInput[]
    expiresAt?: DateTimeFilter<"session"> | Date | string
    createdAt?: DateTimeFilter<"session"> | Date | string
    updatedAt?: DateTimeFilter<"session"> | Date | string
    ipAddress?: StringNullableFilter<"session"> | string | null
    userAgent?: StringNullableFilter<"session"> | string | null
    userId?: StringFilter<"session"> | string
    impersonatedBy?: StringNullableFilter<"session"> | string | null
  }, "id" | "token">

  export type sessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    _count?: sessionCountOrderByAggregateInput
    _max?: sessionMaxOrderByAggregateInput
    _min?: sessionMinOrderByAggregateInput
  }

  export type sessionScalarWhereWithAggregatesInput = {
    AND?: sessionScalarWhereWithAggregatesInput | sessionScalarWhereWithAggregatesInput[]
    OR?: sessionScalarWhereWithAggregatesInput[]
    NOT?: sessionScalarWhereWithAggregatesInput | sessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"session"> | Date | string
    token?: StringWithAggregatesFilter<"session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"session"> | string | null
    userId?: StringWithAggregatesFilter<"session"> | string
    impersonatedBy?: StringNullableWithAggregatesFilter<"session"> | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    emailVerified?: IntFilter<"user"> | number
    image?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    role?: Enumuser_roleNullableFilter<"user"> | $Enums.user_role | null
    banned?: IntNullableFilter<"user"> | number | null
    banReason?: StringNullableFilter<"user"> | string | null
    banExpires?: DateTimeNullableFilter<"user"> | Date | string | null
    deportistas?: DeportistasListRelationFilter
    entrenadores?: EntrenadoresListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    deportistas?: deportistasOrderByRelationAggregateInput
    entrenadores?: entrenadoresOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    emailVerified?: IntFilter<"user"> | number
    image?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    role?: Enumuser_roleNullableFilter<"user"> | $Enums.user_role | null
    banned?: IntNullableFilter<"user"> | number | null
    banReason?: StringNullableFilter<"user"> | string | null
    banExpires?: DateTimeNullableFilter<"user"> | Date | string | null
    deportistas?: DeportistasListRelationFilter
    entrenadores?: EntrenadoresListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    emailVerified?: IntWithAggregatesFilter<"user"> | number
    image?: StringNullableWithAggregatesFilter<"user"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    role?: Enumuser_roleNullableWithAggregatesFilter<"user"> | $Enums.user_role | null
    banned?: IntNullableWithAggregatesFilter<"user"> | number | null
    banReason?: StringNullableWithAggregatesFilter<"user"> | string | null
    banExpires?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type verificationWhereInput = {
    AND?: verificationWhereInput | verificationWhereInput[]
    OR?: verificationWhereInput[]
    NOT?: verificationWhereInput | verificationWhereInput[]
    id?: StringFilter<"verification"> | string
    identifier?: StringFilter<"verification"> | string
    value?: StringFilter<"verification"> | string
    expiresAt?: DateTimeFilter<"verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"verification"> | Date | string | null
  }

  export type verificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: verificationOrderByRelevanceInput
  }

  export type verificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: verificationWhereInput | verificationWhereInput[]
    OR?: verificationWhereInput[]
    NOT?: verificationWhereInput | verificationWhereInput[]
    identifier?: StringFilter<"verification"> | string
    value?: StringFilter<"verification"> | string
    expiresAt?: DateTimeFilter<"verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"verification"> | Date | string | null
  }, "id">

  export type verificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: verificationCountOrderByAggregateInput
    _max?: verificationMaxOrderByAggregateInput
    _min?: verificationMinOrderByAggregateInput
  }

  export type verificationScalarWhereWithAggregatesInput = {
    AND?: verificationScalarWhereWithAggregatesInput | verificationScalarWhereWithAggregatesInput[]
    OR?: verificationScalarWhereWithAggregatesInput[]
    NOT?: verificationScalarWhereWithAggregatesInput | verificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"verification"> | string
    identifier?: StringWithAggregatesFilter<"verification"> | string
    value?: StringWithAggregatesFilter<"verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"verification"> | Date | string | null
  }

  export type accountCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type accountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type accountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type accountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type deportistasCreateInput = {
    numero_licencia: string
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    ftp?: Decimal | DecimalJsLike | number | string | null
    pulso?: number | null
    user?: userCreateNestedOneWithoutDeportistasInput
    entrenadores?: entrenadoresCreateNestedManyWithoutDeportistasInput
    events_resultado?: events_resultadoCreateNestedManyWithoutDeportistasInput
  }

  export type deportistasUncheckedCreateInput = {
    numero_licencia: string
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    ftp?: Decimal | DecimalJsLike | number | string | null
    pulso?: number | null
    user_id?: string | null
    entrenadores?: entrenadoresUncheckedCreateNestedManyWithoutDeportistasInput
    events_resultado?: events_resultadoUncheckedCreateNestedManyWithoutDeportistasInput
  }

  export type deportistasUpdateInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ftp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulso?: NullableIntFieldUpdateOperationsInput | number | null
    user?: userUpdateOneWithoutDeportistasNestedInput
    entrenadores?: entrenadoresUpdateManyWithoutDeportistasNestedInput
    events_resultado?: events_resultadoUpdateManyWithoutDeportistasNestedInput
  }

  export type deportistasUncheckedUpdateInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ftp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulso?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    entrenadores?: entrenadoresUncheckedUpdateManyWithoutDeportistasNestedInput
    events_resultado?: events_resultadoUncheckedUpdateManyWithoutDeportistasNestedInput
  }

  export type deportistasCreateManyInput = {
    numero_licencia: string
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    ftp?: Decimal | DecimalJsLike | number | string | null
    pulso?: number | null
    user_id?: string | null
  }

  export type deportistasUpdateManyMutationInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ftp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulso?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type deportistasUncheckedUpdateManyInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ftp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulso?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type entrenadoresCreateInput = {
    id: number
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    user?: userCreateNestedOneWithoutEntrenadoresInput
    deportistas?: deportistasCreateNestedOneWithoutEntrenadoresInput
  }

  export type entrenadoresUncheckedCreateInput = {
    id: number
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    user_id?: string | null
    deportista_id?: string | null
  }

  export type entrenadoresUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutEntrenadoresNestedInput
    deportistas?: deportistasUpdateOneWithoutEntrenadoresNestedInput
  }

  export type entrenadoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    deportista_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type entrenadoresCreateManyInput = {
    id: number
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    user_id?: string | null
    deportista_id?: string | null
  }

  export type entrenadoresUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entrenadoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    deportista_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventsCreateInput = {
    id: number
    nombre?: string | null
    fecha?: Date | string | null
    lugar?: string | null
    categoria?: $Enums.events_categoria | null
    modalidad?: $Enums.events_modalidad | null
    descripcion?: string | null
    events_resultado?: events_resultadoCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateInput = {
    id: number
    nombre?: string | null
    fecha?: Date | string | null
    lugar?: string | null
    categoria?: $Enums.events_categoria | null
    modalidad?: $Enums.events_modalidad | null
    descripcion?: string | null
    events_resultado?: events_resultadoUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableEnumevents_categoriaFieldUpdateOperationsInput | $Enums.events_categoria | null
    modalidad?: NullableEnumevents_modalidadFieldUpdateOperationsInput | $Enums.events_modalidad | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    events_resultado?: events_resultadoUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableEnumevents_categoriaFieldUpdateOperationsInput | $Enums.events_categoria | null
    modalidad?: NullableEnumevents_modalidadFieldUpdateOperationsInput | $Enums.events_modalidad | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    events_resultado?: events_resultadoUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type eventsCreateManyInput = {
    id: number
    nombre?: string | null
    fecha?: Date | string | null
    lugar?: string | null
    categoria?: $Enums.events_categoria | null
    modalidad?: $Enums.events_modalidad | null
    descripcion?: string | null
  }

  export type eventsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableEnumevents_categoriaFieldUpdateOperationsInput | $Enums.events_categoria | null
    modalidad?: NullableEnumevents_modalidadFieldUpdateOperationsInput | $Enums.events_modalidad | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableEnumevents_categoriaFieldUpdateOperationsInput | $Enums.events_categoria | null
    modalidad?: NullableEnumevents_modalidadFieldUpdateOperationsInput | $Enums.events_modalidad | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type events_resultadoCreateInput = {
    id: number
    tiempo?: Date | string | null
    posicion?: number | null
    valoracion_escala?: Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: string | null
    valoracion_entrenador?: string | null
    events?: eventsCreateNestedOneWithoutEvents_resultadoInput
    deportistas?: deportistasCreateNestedOneWithoutEvents_resultadoInput
  }

  export type events_resultadoUncheckedCreateInput = {
    id: number
    tiempo?: Date | string | null
    posicion?: number | null
    valoracion_escala?: Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: string | null
    valoracion_entrenador?: string | null
    evento_id?: number | null
    deportista_id?: string | null
  }

  export type events_resultadoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tiempo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posicion?: NullableIntFieldUpdateOperationsInput | number | null
    valoracion_escala?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: NullableStringFieldUpdateOperationsInput | string | null
    valoracion_entrenador?: NullableStringFieldUpdateOperationsInput | string | null
    events?: eventsUpdateOneWithoutEvents_resultadoNestedInput
    deportistas?: deportistasUpdateOneWithoutEvents_resultadoNestedInput
  }

  export type events_resultadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tiempo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posicion?: NullableIntFieldUpdateOperationsInput | number | null
    valoracion_escala?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: NullableStringFieldUpdateOperationsInput | string | null
    valoracion_entrenador?: NullableStringFieldUpdateOperationsInput | string | null
    evento_id?: NullableIntFieldUpdateOperationsInput | number | null
    deportista_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type events_resultadoCreateManyInput = {
    id: number
    tiempo?: Date | string | null
    posicion?: number | null
    valoracion_escala?: Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: string | null
    valoracion_entrenador?: string | null
    evento_id?: number | null
    deportista_id?: string | null
  }

  export type events_resultadoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    tiempo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posicion?: NullableIntFieldUpdateOperationsInput | number | null
    valoracion_escala?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: NullableStringFieldUpdateOperationsInput | string | null
    valoracion_entrenador?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type events_resultadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tiempo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posicion?: NullableIntFieldUpdateOperationsInput | number | null
    valoracion_escala?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: NullableStringFieldUpdateOperationsInput | string | null
    valoracion_entrenador?: NullableStringFieldUpdateOperationsInput | string | null
    evento_id?: NullableIntFieldUpdateOperationsInput | number | null
    deportista_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type sessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type sessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type sessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: number
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: $Enums.user_role | null
    banned?: number | null
    banReason?: string | null
    banExpires?: Date | string | null
    deportistas?: deportistasCreateNestedManyWithoutUserInput
    entrenadores?: entrenadoresCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: number
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: $Enums.user_role | null
    banned?: number | null
    banReason?: string | null
    banExpires?: Date | string | null
    deportistas?: deportistasUncheckedCreateNestedManyWithoutUserInput
    entrenadores?: entrenadoresUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    banned?: NullableIntFieldUpdateOperationsInput | number | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deportistas?: deportistasUpdateManyWithoutUserNestedInput
    entrenadores?: entrenadoresUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    banned?: NullableIntFieldUpdateOperationsInput | number | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deportistas?: deportistasUncheckedUpdateManyWithoutUserNestedInput
    entrenadores?: entrenadoresUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified: number
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: $Enums.user_role | null
    banned?: number | null
    banReason?: string | null
    banExpires?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    banned?: NullableIntFieldUpdateOperationsInput | number | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    banned?: NullableIntFieldUpdateOperationsInput | number | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type verificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type verificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type verificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type verificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type verificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type verificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type verificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type accountOrderByRelevanceInput = {
    fields: accountOrderByRelevanceFieldEnum | accountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type accountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type EntrenadoresListRelationFilter = {
    every?: entrenadoresWhereInput
    some?: entrenadoresWhereInput
    none?: entrenadoresWhereInput
  }

  export type Events_resultadoListRelationFilter = {
    every?: events_resultadoWhereInput
    some?: events_resultadoWhereInput
    none?: events_resultadoWhereInput
  }

  export type entrenadoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type events_resultadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type deportistasOrderByRelevanceInput = {
    fields: deportistasOrderByRelevanceFieldEnum | deportistasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type deportistasCountOrderByAggregateInput = {
    numero_licencia?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    fecha_nacimiento?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    ftp?: SortOrder
    pulso?: SortOrder
    user_id?: SortOrder
  }

  export type deportistasAvgOrderByAggregateInput = {
    telefono?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    ftp?: SortOrder
    pulso?: SortOrder
  }

  export type deportistasMaxOrderByAggregateInput = {
    numero_licencia?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    fecha_nacimiento?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    ftp?: SortOrder
    pulso?: SortOrder
    user_id?: SortOrder
  }

  export type deportistasMinOrderByAggregateInput = {
    numero_licencia?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    fecha_nacimiento?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    ftp?: SortOrder
    pulso?: SortOrder
    user_id?: SortOrder
  }

  export type deportistasSumOrderByAggregateInput = {
    telefono?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    ftp?: SortOrder
    pulso?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DeportistasNullableScalarRelationFilter = {
    is?: deportistasWhereInput | null
    isNot?: deportistasWhereInput | null
  }

  export type entrenadoresOrderByRelevanceInput = {
    fields: entrenadoresOrderByRelevanceFieldEnum | entrenadoresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type entrenadoresCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    fecha_nacimiento?: SortOrder
    user_id?: SortOrder
    deportista_id?: SortOrder
  }

  export type entrenadoresAvgOrderByAggregateInput = {
    id?: SortOrder
    telefono?: SortOrder
  }

  export type entrenadoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    fecha_nacimiento?: SortOrder
    user_id?: SortOrder
    deportista_id?: SortOrder
  }

  export type entrenadoresMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    fecha_nacimiento?: SortOrder
    user_id?: SortOrder
    deportista_id?: SortOrder
  }

  export type entrenadoresSumOrderByAggregateInput = {
    id?: SortOrder
    telefono?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Enumevents_categoriaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.events_categoria | Enumevents_categoriaFieldRefInput<$PrismaModel> | null
    in?: $Enums.events_categoria[] | null
    notIn?: $Enums.events_categoria[] | null
    not?: NestedEnumevents_categoriaNullableFilter<$PrismaModel> | $Enums.events_categoria | null
  }

  export type Enumevents_modalidadNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.events_modalidad | Enumevents_modalidadFieldRefInput<$PrismaModel> | null
    in?: $Enums.events_modalidad[] | null
    notIn?: $Enums.events_modalidad[] | null
    not?: NestedEnumevents_modalidadNullableFilter<$PrismaModel> | $Enums.events_modalidad | null
  }

  export type eventsOrderByRelevanceInput = {
    fields: eventsOrderByRelevanceFieldEnum | eventsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type eventsCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrder
    categoria?: SortOrder
    modalidad?: SortOrder
    descripcion?: SortOrder
  }

  export type eventsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrder
    categoria?: SortOrder
    modalidad?: SortOrder
    descripcion?: SortOrder
  }

  export type eventsMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrder
    categoria?: SortOrder
    modalidad?: SortOrder
    descripcion?: SortOrder
  }

  export type eventsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumevents_categoriaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.events_categoria | Enumevents_categoriaFieldRefInput<$PrismaModel> | null
    in?: $Enums.events_categoria[] | null
    notIn?: $Enums.events_categoria[] | null
    not?: NestedEnumevents_categoriaNullableWithAggregatesFilter<$PrismaModel> | $Enums.events_categoria | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumevents_categoriaNullableFilter<$PrismaModel>
    _max?: NestedEnumevents_categoriaNullableFilter<$PrismaModel>
  }

  export type Enumevents_modalidadNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.events_modalidad | Enumevents_modalidadFieldRefInput<$PrismaModel> | null
    in?: $Enums.events_modalidad[] | null
    notIn?: $Enums.events_modalidad[] | null
    not?: NestedEnumevents_modalidadNullableWithAggregatesFilter<$PrismaModel> | $Enums.events_modalidad | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumevents_modalidadNullableFilter<$PrismaModel>
    _max?: NestedEnumevents_modalidadNullableFilter<$PrismaModel>
  }

  export type EventsNullableScalarRelationFilter = {
    is?: eventsWhereInput | null
    isNot?: eventsWhereInput | null
  }

  export type events_resultadoOrderByRelevanceInput = {
    fields: events_resultadoOrderByRelevanceFieldEnum | events_resultadoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type events_resultadoCountOrderByAggregateInput = {
    id?: SortOrder
    tiempo?: SortOrder
    posicion?: SortOrder
    valoracion_escala?: SortOrder
    valoracion_deportista?: SortOrder
    valoracion_entrenador?: SortOrder
    evento_id?: SortOrder
    deportista_id?: SortOrder
  }

  export type events_resultadoAvgOrderByAggregateInput = {
    id?: SortOrder
    posicion?: SortOrder
    valoracion_escala?: SortOrder
    evento_id?: SortOrder
  }

  export type events_resultadoMaxOrderByAggregateInput = {
    id?: SortOrder
    tiempo?: SortOrder
    posicion?: SortOrder
    valoracion_escala?: SortOrder
    valoracion_deportista?: SortOrder
    valoracion_entrenador?: SortOrder
    evento_id?: SortOrder
    deportista_id?: SortOrder
  }

  export type events_resultadoMinOrderByAggregateInput = {
    id?: SortOrder
    tiempo?: SortOrder
    posicion?: SortOrder
    valoracion_escala?: SortOrder
    valoracion_deportista?: SortOrder
    valoracion_entrenador?: SortOrder
    evento_id?: SortOrder
    deportista_id?: SortOrder
  }

  export type events_resultadoSumOrderByAggregateInput = {
    id?: SortOrder
    posicion?: SortOrder
    valoracion_escala?: SortOrder
    evento_id?: SortOrder
  }

  export type sessionOrderByRelevanceInput = {
    fields: sessionOrderByRelevanceFieldEnum | sessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type sessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type sessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type Enumuser_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | null
    notIn?: $Enums.user_role[] | null
    not?: NestedEnumuser_roleNullableFilter<$PrismaModel> | $Enums.user_role | null
  }

  export type DeportistasListRelationFilter = {
    every?: deportistasWhereInput
    some?: deportistasWhereInput
    none?: deportistasWhereInput
  }

  export type deportistasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    emailVerified?: SortOrder
    banned?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    emailVerified?: SortOrder
    banned?: SortOrder
  }

  export type Enumuser_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | null
    notIn?: $Enums.user_role[] | null
    not?: NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_roleNullableFilter<$PrismaModel>
  }

  export type verificationOrderByRelevanceInput = {
    fields: verificationOrderByRelevanceFieldEnum | verificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type verificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type verificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type verificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userCreateNestedOneWithoutDeportistasInput = {
    create?: XOR<userCreateWithoutDeportistasInput, userUncheckedCreateWithoutDeportistasInput>
    connectOrCreate?: userCreateOrConnectWithoutDeportistasInput
    connect?: userWhereUniqueInput
  }

  export type entrenadoresCreateNestedManyWithoutDeportistasInput = {
    create?: XOR<entrenadoresCreateWithoutDeportistasInput, entrenadoresUncheckedCreateWithoutDeportistasInput> | entrenadoresCreateWithoutDeportistasInput[] | entrenadoresUncheckedCreateWithoutDeportistasInput[]
    connectOrCreate?: entrenadoresCreateOrConnectWithoutDeportistasInput | entrenadoresCreateOrConnectWithoutDeportistasInput[]
    createMany?: entrenadoresCreateManyDeportistasInputEnvelope
    connect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
  }

  export type events_resultadoCreateNestedManyWithoutDeportistasInput = {
    create?: XOR<events_resultadoCreateWithoutDeportistasInput, events_resultadoUncheckedCreateWithoutDeportistasInput> | events_resultadoCreateWithoutDeportistasInput[] | events_resultadoUncheckedCreateWithoutDeportistasInput[]
    connectOrCreate?: events_resultadoCreateOrConnectWithoutDeportistasInput | events_resultadoCreateOrConnectWithoutDeportistasInput[]
    createMany?: events_resultadoCreateManyDeportistasInputEnvelope
    connect?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
  }

  export type entrenadoresUncheckedCreateNestedManyWithoutDeportistasInput = {
    create?: XOR<entrenadoresCreateWithoutDeportistasInput, entrenadoresUncheckedCreateWithoutDeportistasInput> | entrenadoresCreateWithoutDeportistasInput[] | entrenadoresUncheckedCreateWithoutDeportistasInput[]
    connectOrCreate?: entrenadoresCreateOrConnectWithoutDeportistasInput | entrenadoresCreateOrConnectWithoutDeportistasInput[]
    createMany?: entrenadoresCreateManyDeportistasInputEnvelope
    connect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
  }

  export type events_resultadoUncheckedCreateNestedManyWithoutDeportistasInput = {
    create?: XOR<events_resultadoCreateWithoutDeportistasInput, events_resultadoUncheckedCreateWithoutDeportistasInput> | events_resultadoCreateWithoutDeportistasInput[] | events_resultadoUncheckedCreateWithoutDeportistasInput[]
    connectOrCreate?: events_resultadoCreateOrConnectWithoutDeportistasInput | events_resultadoCreateOrConnectWithoutDeportistasInput[]
    createMany?: events_resultadoCreateManyDeportistasInputEnvelope
    connect?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateOneWithoutDeportistasNestedInput = {
    create?: XOR<userCreateWithoutDeportistasInput, userUncheckedCreateWithoutDeportistasInput>
    connectOrCreate?: userCreateOrConnectWithoutDeportistasInput
    upsert?: userUpsertWithoutDeportistasInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutDeportistasInput, userUpdateWithoutDeportistasInput>, userUncheckedUpdateWithoutDeportistasInput>
  }

  export type entrenadoresUpdateManyWithoutDeportistasNestedInput = {
    create?: XOR<entrenadoresCreateWithoutDeportistasInput, entrenadoresUncheckedCreateWithoutDeportistasInput> | entrenadoresCreateWithoutDeportistasInput[] | entrenadoresUncheckedCreateWithoutDeportistasInput[]
    connectOrCreate?: entrenadoresCreateOrConnectWithoutDeportistasInput | entrenadoresCreateOrConnectWithoutDeportistasInput[]
    upsert?: entrenadoresUpsertWithWhereUniqueWithoutDeportistasInput | entrenadoresUpsertWithWhereUniqueWithoutDeportistasInput[]
    createMany?: entrenadoresCreateManyDeportistasInputEnvelope
    set?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    disconnect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    delete?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    connect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    update?: entrenadoresUpdateWithWhereUniqueWithoutDeportistasInput | entrenadoresUpdateWithWhereUniqueWithoutDeportistasInput[]
    updateMany?: entrenadoresUpdateManyWithWhereWithoutDeportistasInput | entrenadoresUpdateManyWithWhereWithoutDeportistasInput[]
    deleteMany?: entrenadoresScalarWhereInput | entrenadoresScalarWhereInput[]
  }

  export type events_resultadoUpdateManyWithoutDeportistasNestedInput = {
    create?: XOR<events_resultadoCreateWithoutDeportistasInput, events_resultadoUncheckedCreateWithoutDeportistasInput> | events_resultadoCreateWithoutDeportistasInput[] | events_resultadoUncheckedCreateWithoutDeportistasInput[]
    connectOrCreate?: events_resultadoCreateOrConnectWithoutDeportistasInput | events_resultadoCreateOrConnectWithoutDeportistasInput[]
    upsert?: events_resultadoUpsertWithWhereUniqueWithoutDeportistasInput | events_resultadoUpsertWithWhereUniqueWithoutDeportistasInput[]
    createMany?: events_resultadoCreateManyDeportistasInputEnvelope
    set?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    disconnect?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    delete?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    connect?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    update?: events_resultadoUpdateWithWhereUniqueWithoutDeportistasInput | events_resultadoUpdateWithWhereUniqueWithoutDeportistasInput[]
    updateMany?: events_resultadoUpdateManyWithWhereWithoutDeportistasInput | events_resultadoUpdateManyWithWhereWithoutDeportistasInput[]
    deleteMany?: events_resultadoScalarWhereInput | events_resultadoScalarWhereInput[]
  }

  export type entrenadoresUncheckedUpdateManyWithoutDeportistasNestedInput = {
    create?: XOR<entrenadoresCreateWithoutDeportistasInput, entrenadoresUncheckedCreateWithoutDeportistasInput> | entrenadoresCreateWithoutDeportistasInput[] | entrenadoresUncheckedCreateWithoutDeportistasInput[]
    connectOrCreate?: entrenadoresCreateOrConnectWithoutDeportistasInput | entrenadoresCreateOrConnectWithoutDeportistasInput[]
    upsert?: entrenadoresUpsertWithWhereUniqueWithoutDeportistasInput | entrenadoresUpsertWithWhereUniqueWithoutDeportistasInput[]
    createMany?: entrenadoresCreateManyDeportistasInputEnvelope
    set?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    disconnect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    delete?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    connect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    update?: entrenadoresUpdateWithWhereUniqueWithoutDeportistasInput | entrenadoresUpdateWithWhereUniqueWithoutDeportistasInput[]
    updateMany?: entrenadoresUpdateManyWithWhereWithoutDeportistasInput | entrenadoresUpdateManyWithWhereWithoutDeportistasInput[]
    deleteMany?: entrenadoresScalarWhereInput | entrenadoresScalarWhereInput[]
  }

  export type events_resultadoUncheckedUpdateManyWithoutDeportistasNestedInput = {
    create?: XOR<events_resultadoCreateWithoutDeportistasInput, events_resultadoUncheckedCreateWithoutDeportistasInput> | events_resultadoCreateWithoutDeportistasInput[] | events_resultadoUncheckedCreateWithoutDeportistasInput[]
    connectOrCreate?: events_resultadoCreateOrConnectWithoutDeportistasInput | events_resultadoCreateOrConnectWithoutDeportistasInput[]
    upsert?: events_resultadoUpsertWithWhereUniqueWithoutDeportistasInput | events_resultadoUpsertWithWhereUniqueWithoutDeportistasInput[]
    createMany?: events_resultadoCreateManyDeportistasInputEnvelope
    set?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    disconnect?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    delete?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    connect?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    update?: events_resultadoUpdateWithWhereUniqueWithoutDeportistasInput | events_resultadoUpdateWithWhereUniqueWithoutDeportistasInput[]
    updateMany?: events_resultadoUpdateManyWithWhereWithoutDeportistasInput | events_resultadoUpdateManyWithWhereWithoutDeportistasInput[]
    deleteMany?: events_resultadoScalarWhereInput | events_resultadoScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutEntrenadoresInput = {
    create?: XOR<userCreateWithoutEntrenadoresInput, userUncheckedCreateWithoutEntrenadoresInput>
    connectOrCreate?: userCreateOrConnectWithoutEntrenadoresInput
    connect?: userWhereUniqueInput
  }

  export type deportistasCreateNestedOneWithoutEntrenadoresInput = {
    create?: XOR<deportistasCreateWithoutEntrenadoresInput, deportistasUncheckedCreateWithoutEntrenadoresInput>
    connectOrCreate?: deportistasCreateOrConnectWithoutEntrenadoresInput
    connect?: deportistasWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateOneWithoutEntrenadoresNestedInput = {
    create?: XOR<userCreateWithoutEntrenadoresInput, userUncheckedCreateWithoutEntrenadoresInput>
    connectOrCreate?: userCreateOrConnectWithoutEntrenadoresInput
    upsert?: userUpsertWithoutEntrenadoresInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutEntrenadoresInput, userUpdateWithoutEntrenadoresInput>, userUncheckedUpdateWithoutEntrenadoresInput>
  }

  export type deportistasUpdateOneWithoutEntrenadoresNestedInput = {
    create?: XOR<deportistasCreateWithoutEntrenadoresInput, deportistasUncheckedCreateWithoutEntrenadoresInput>
    connectOrCreate?: deportistasCreateOrConnectWithoutEntrenadoresInput
    upsert?: deportistasUpsertWithoutEntrenadoresInput
    disconnect?: deportistasWhereInput | boolean
    delete?: deportistasWhereInput | boolean
    connect?: deportistasWhereUniqueInput
    update?: XOR<XOR<deportistasUpdateToOneWithWhereWithoutEntrenadoresInput, deportistasUpdateWithoutEntrenadoresInput>, deportistasUncheckedUpdateWithoutEntrenadoresInput>
  }

  export type events_resultadoCreateNestedManyWithoutEventsInput = {
    create?: XOR<events_resultadoCreateWithoutEventsInput, events_resultadoUncheckedCreateWithoutEventsInput> | events_resultadoCreateWithoutEventsInput[] | events_resultadoUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: events_resultadoCreateOrConnectWithoutEventsInput | events_resultadoCreateOrConnectWithoutEventsInput[]
    createMany?: events_resultadoCreateManyEventsInputEnvelope
    connect?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
  }

  export type events_resultadoUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<events_resultadoCreateWithoutEventsInput, events_resultadoUncheckedCreateWithoutEventsInput> | events_resultadoCreateWithoutEventsInput[] | events_resultadoUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: events_resultadoCreateOrConnectWithoutEventsInput | events_resultadoCreateOrConnectWithoutEventsInput[]
    createMany?: events_resultadoCreateManyEventsInputEnvelope
    connect?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
  }

  export type NullableEnumevents_categoriaFieldUpdateOperationsInput = {
    set?: $Enums.events_categoria | null
  }

  export type NullableEnumevents_modalidadFieldUpdateOperationsInput = {
    set?: $Enums.events_modalidad | null
  }

  export type events_resultadoUpdateManyWithoutEventsNestedInput = {
    create?: XOR<events_resultadoCreateWithoutEventsInput, events_resultadoUncheckedCreateWithoutEventsInput> | events_resultadoCreateWithoutEventsInput[] | events_resultadoUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: events_resultadoCreateOrConnectWithoutEventsInput | events_resultadoCreateOrConnectWithoutEventsInput[]
    upsert?: events_resultadoUpsertWithWhereUniqueWithoutEventsInput | events_resultadoUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: events_resultadoCreateManyEventsInputEnvelope
    set?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    disconnect?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    delete?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    connect?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    update?: events_resultadoUpdateWithWhereUniqueWithoutEventsInput | events_resultadoUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: events_resultadoUpdateManyWithWhereWithoutEventsInput | events_resultadoUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: events_resultadoScalarWhereInput | events_resultadoScalarWhereInput[]
  }

  export type events_resultadoUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<events_resultadoCreateWithoutEventsInput, events_resultadoUncheckedCreateWithoutEventsInput> | events_resultadoCreateWithoutEventsInput[] | events_resultadoUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: events_resultadoCreateOrConnectWithoutEventsInput | events_resultadoCreateOrConnectWithoutEventsInput[]
    upsert?: events_resultadoUpsertWithWhereUniqueWithoutEventsInput | events_resultadoUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: events_resultadoCreateManyEventsInputEnvelope
    set?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    disconnect?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    delete?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    connect?: events_resultadoWhereUniqueInput | events_resultadoWhereUniqueInput[]
    update?: events_resultadoUpdateWithWhereUniqueWithoutEventsInput | events_resultadoUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: events_resultadoUpdateManyWithWhereWithoutEventsInput | events_resultadoUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: events_resultadoScalarWhereInput | events_resultadoScalarWhereInput[]
  }

  export type eventsCreateNestedOneWithoutEvents_resultadoInput = {
    create?: XOR<eventsCreateWithoutEvents_resultadoInput, eventsUncheckedCreateWithoutEvents_resultadoInput>
    connectOrCreate?: eventsCreateOrConnectWithoutEvents_resultadoInput
    connect?: eventsWhereUniqueInput
  }

  export type deportistasCreateNestedOneWithoutEvents_resultadoInput = {
    create?: XOR<deportistasCreateWithoutEvents_resultadoInput, deportistasUncheckedCreateWithoutEvents_resultadoInput>
    connectOrCreate?: deportistasCreateOrConnectWithoutEvents_resultadoInput
    connect?: deportistasWhereUniqueInput
  }

  export type eventsUpdateOneWithoutEvents_resultadoNestedInput = {
    create?: XOR<eventsCreateWithoutEvents_resultadoInput, eventsUncheckedCreateWithoutEvents_resultadoInput>
    connectOrCreate?: eventsCreateOrConnectWithoutEvents_resultadoInput
    upsert?: eventsUpsertWithoutEvents_resultadoInput
    disconnect?: eventsWhereInput | boolean
    delete?: eventsWhereInput | boolean
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutEvents_resultadoInput, eventsUpdateWithoutEvents_resultadoInput>, eventsUncheckedUpdateWithoutEvents_resultadoInput>
  }

  export type deportistasUpdateOneWithoutEvents_resultadoNestedInput = {
    create?: XOR<deportistasCreateWithoutEvents_resultadoInput, deportistasUncheckedCreateWithoutEvents_resultadoInput>
    connectOrCreate?: deportistasCreateOrConnectWithoutEvents_resultadoInput
    upsert?: deportistasUpsertWithoutEvents_resultadoInput
    disconnect?: deportistasWhereInput | boolean
    delete?: deportistasWhereInput | boolean
    connect?: deportistasWhereUniqueInput
    update?: XOR<XOR<deportistasUpdateToOneWithWhereWithoutEvents_resultadoInput, deportistasUpdateWithoutEvents_resultadoInput>, deportistasUncheckedUpdateWithoutEvents_resultadoInput>
  }

  export type deportistasCreateNestedManyWithoutUserInput = {
    create?: XOR<deportistasCreateWithoutUserInput, deportistasUncheckedCreateWithoutUserInput> | deportistasCreateWithoutUserInput[] | deportistasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: deportistasCreateOrConnectWithoutUserInput | deportistasCreateOrConnectWithoutUserInput[]
    createMany?: deportistasCreateManyUserInputEnvelope
    connect?: deportistasWhereUniqueInput | deportistasWhereUniqueInput[]
  }

  export type entrenadoresCreateNestedManyWithoutUserInput = {
    create?: XOR<entrenadoresCreateWithoutUserInput, entrenadoresUncheckedCreateWithoutUserInput> | entrenadoresCreateWithoutUserInput[] | entrenadoresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: entrenadoresCreateOrConnectWithoutUserInput | entrenadoresCreateOrConnectWithoutUserInput[]
    createMany?: entrenadoresCreateManyUserInputEnvelope
    connect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
  }

  export type deportistasUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<deportistasCreateWithoutUserInput, deportistasUncheckedCreateWithoutUserInput> | deportistasCreateWithoutUserInput[] | deportistasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: deportistasCreateOrConnectWithoutUserInput | deportistasCreateOrConnectWithoutUserInput[]
    createMany?: deportistasCreateManyUserInputEnvelope
    connect?: deportistasWhereUniqueInput | deportistasWhereUniqueInput[]
  }

  export type entrenadoresUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<entrenadoresCreateWithoutUserInput, entrenadoresUncheckedCreateWithoutUserInput> | entrenadoresCreateWithoutUserInput[] | entrenadoresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: entrenadoresCreateOrConnectWithoutUserInput | entrenadoresCreateOrConnectWithoutUserInput[]
    createMany?: entrenadoresCreateManyUserInputEnvelope
    connect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
  }

  export type NullableEnumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role | null
  }

  export type deportistasUpdateManyWithoutUserNestedInput = {
    create?: XOR<deportistasCreateWithoutUserInput, deportistasUncheckedCreateWithoutUserInput> | deportistasCreateWithoutUserInput[] | deportistasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: deportistasCreateOrConnectWithoutUserInput | deportistasCreateOrConnectWithoutUserInput[]
    upsert?: deportistasUpsertWithWhereUniqueWithoutUserInput | deportistasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: deportistasCreateManyUserInputEnvelope
    set?: deportistasWhereUniqueInput | deportistasWhereUniqueInput[]
    disconnect?: deportistasWhereUniqueInput | deportistasWhereUniqueInput[]
    delete?: deportistasWhereUniqueInput | deportistasWhereUniqueInput[]
    connect?: deportistasWhereUniqueInput | deportistasWhereUniqueInput[]
    update?: deportistasUpdateWithWhereUniqueWithoutUserInput | deportistasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: deportistasUpdateManyWithWhereWithoutUserInput | deportistasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: deportistasScalarWhereInput | deportistasScalarWhereInput[]
  }

  export type entrenadoresUpdateManyWithoutUserNestedInput = {
    create?: XOR<entrenadoresCreateWithoutUserInput, entrenadoresUncheckedCreateWithoutUserInput> | entrenadoresCreateWithoutUserInput[] | entrenadoresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: entrenadoresCreateOrConnectWithoutUserInput | entrenadoresCreateOrConnectWithoutUserInput[]
    upsert?: entrenadoresUpsertWithWhereUniqueWithoutUserInput | entrenadoresUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: entrenadoresCreateManyUserInputEnvelope
    set?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    disconnect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    delete?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    connect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    update?: entrenadoresUpdateWithWhereUniqueWithoutUserInput | entrenadoresUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: entrenadoresUpdateManyWithWhereWithoutUserInput | entrenadoresUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: entrenadoresScalarWhereInput | entrenadoresScalarWhereInput[]
  }

  export type deportistasUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<deportistasCreateWithoutUserInput, deportistasUncheckedCreateWithoutUserInput> | deportistasCreateWithoutUserInput[] | deportistasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: deportistasCreateOrConnectWithoutUserInput | deportistasCreateOrConnectWithoutUserInput[]
    upsert?: deportistasUpsertWithWhereUniqueWithoutUserInput | deportistasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: deportistasCreateManyUserInputEnvelope
    set?: deportistasWhereUniqueInput | deportistasWhereUniqueInput[]
    disconnect?: deportistasWhereUniqueInput | deportistasWhereUniqueInput[]
    delete?: deportistasWhereUniqueInput | deportistasWhereUniqueInput[]
    connect?: deportistasWhereUniqueInput | deportistasWhereUniqueInput[]
    update?: deportistasUpdateWithWhereUniqueWithoutUserInput | deportistasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: deportistasUpdateManyWithWhereWithoutUserInput | deportistasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: deportistasScalarWhereInput | deportistasScalarWhereInput[]
  }

  export type entrenadoresUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<entrenadoresCreateWithoutUserInput, entrenadoresUncheckedCreateWithoutUserInput> | entrenadoresCreateWithoutUserInput[] | entrenadoresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: entrenadoresCreateOrConnectWithoutUserInput | entrenadoresCreateOrConnectWithoutUserInput[]
    upsert?: entrenadoresUpsertWithWhereUniqueWithoutUserInput | entrenadoresUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: entrenadoresCreateManyUserInputEnvelope
    set?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    disconnect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    delete?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    connect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    update?: entrenadoresUpdateWithWhereUniqueWithoutUserInput | entrenadoresUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: entrenadoresUpdateManyWithWhereWithoutUserInput | entrenadoresUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: entrenadoresScalarWhereInput | entrenadoresScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumevents_categoriaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.events_categoria | Enumevents_categoriaFieldRefInput<$PrismaModel> | null
    in?: $Enums.events_categoria[] | null
    notIn?: $Enums.events_categoria[] | null
    not?: NestedEnumevents_categoriaNullableFilter<$PrismaModel> | $Enums.events_categoria | null
  }

  export type NestedEnumevents_modalidadNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.events_modalidad | Enumevents_modalidadFieldRefInput<$PrismaModel> | null
    in?: $Enums.events_modalidad[] | null
    notIn?: $Enums.events_modalidad[] | null
    not?: NestedEnumevents_modalidadNullableFilter<$PrismaModel> | $Enums.events_modalidad | null
  }

  export type NestedEnumevents_categoriaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.events_categoria | Enumevents_categoriaFieldRefInput<$PrismaModel> | null
    in?: $Enums.events_categoria[] | null
    notIn?: $Enums.events_categoria[] | null
    not?: NestedEnumevents_categoriaNullableWithAggregatesFilter<$PrismaModel> | $Enums.events_categoria | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumevents_categoriaNullableFilter<$PrismaModel>
    _max?: NestedEnumevents_categoriaNullableFilter<$PrismaModel>
  }

  export type NestedEnumevents_modalidadNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.events_modalidad | Enumevents_modalidadFieldRefInput<$PrismaModel> | null
    in?: $Enums.events_modalidad[] | null
    notIn?: $Enums.events_modalidad[] | null
    not?: NestedEnumevents_modalidadNullableWithAggregatesFilter<$PrismaModel> | $Enums.events_modalidad | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumevents_modalidadNullableFilter<$PrismaModel>
    _max?: NestedEnumevents_modalidadNullableFilter<$PrismaModel>
  }

  export type NestedEnumuser_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | null
    notIn?: $Enums.user_role[] | null
    not?: NestedEnumuser_roleNullableFilter<$PrismaModel> | $Enums.user_role | null
  }

  export type NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | null
    notIn?: $Enums.user_role[] | null
    not?: NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_roleNullableFilter<$PrismaModel>
  }

  export type userCreateWithoutDeportistasInput = {
    id: string
    name: string
    email: string
    emailVerified: number
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: $Enums.user_role | null
    banned?: number | null
    banReason?: string | null
    banExpires?: Date | string | null
    entrenadores?: entrenadoresCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutDeportistasInput = {
    id: string
    name: string
    email: string
    emailVerified: number
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: $Enums.user_role | null
    banned?: number | null
    banReason?: string | null
    banExpires?: Date | string | null
    entrenadores?: entrenadoresUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutDeportistasInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutDeportistasInput, userUncheckedCreateWithoutDeportistasInput>
  }

  export type entrenadoresCreateWithoutDeportistasInput = {
    id: number
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    user?: userCreateNestedOneWithoutEntrenadoresInput
  }

  export type entrenadoresUncheckedCreateWithoutDeportistasInput = {
    id: number
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    user_id?: string | null
  }

  export type entrenadoresCreateOrConnectWithoutDeportistasInput = {
    where: entrenadoresWhereUniqueInput
    create: XOR<entrenadoresCreateWithoutDeportistasInput, entrenadoresUncheckedCreateWithoutDeportistasInput>
  }

  export type entrenadoresCreateManyDeportistasInputEnvelope = {
    data: entrenadoresCreateManyDeportistasInput | entrenadoresCreateManyDeportistasInput[]
    skipDuplicates?: boolean
  }

  export type events_resultadoCreateWithoutDeportistasInput = {
    id: number
    tiempo?: Date | string | null
    posicion?: number | null
    valoracion_escala?: Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: string | null
    valoracion_entrenador?: string | null
    events?: eventsCreateNestedOneWithoutEvents_resultadoInput
  }

  export type events_resultadoUncheckedCreateWithoutDeportistasInput = {
    id: number
    tiempo?: Date | string | null
    posicion?: number | null
    valoracion_escala?: Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: string | null
    valoracion_entrenador?: string | null
    evento_id?: number | null
  }

  export type events_resultadoCreateOrConnectWithoutDeportistasInput = {
    where: events_resultadoWhereUniqueInput
    create: XOR<events_resultadoCreateWithoutDeportistasInput, events_resultadoUncheckedCreateWithoutDeportistasInput>
  }

  export type events_resultadoCreateManyDeportistasInputEnvelope = {
    data: events_resultadoCreateManyDeportistasInput | events_resultadoCreateManyDeportistasInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutDeportistasInput = {
    update: XOR<userUpdateWithoutDeportistasInput, userUncheckedUpdateWithoutDeportistasInput>
    create: XOR<userCreateWithoutDeportistasInput, userUncheckedCreateWithoutDeportistasInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutDeportistasInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutDeportistasInput, userUncheckedUpdateWithoutDeportistasInput>
  }

  export type userUpdateWithoutDeportistasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    banned?: NullableIntFieldUpdateOperationsInput | number | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entrenadores?: entrenadoresUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutDeportistasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    banned?: NullableIntFieldUpdateOperationsInput | number | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entrenadores?: entrenadoresUncheckedUpdateManyWithoutUserNestedInput
  }

  export type entrenadoresUpsertWithWhereUniqueWithoutDeportistasInput = {
    where: entrenadoresWhereUniqueInput
    update: XOR<entrenadoresUpdateWithoutDeportistasInput, entrenadoresUncheckedUpdateWithoutDeportistasInput>
    create: XOR<entrenadoresCreateWithoutDeportistasInput, entrenadoresUncheckedCreateWithoutDeportistasInput>
  }

  export type entrenadoresUpdateWithWhereUniqueWithoutDeportistasInput = {
    where: entrenadoresWhereUniqueInput
    data: XOR<entrenadoresUpdateWithoutDeportistasInput, entrenadoresUncheckedUpdateWithoutDeportistasInput>
  }

  export type entrenadoresUpdateManyWithWhereWithoutDeportistasInput = {
    where: entrenadoresScalarWhereInput
    data: XOR<entrenadoresUpdateManyMutationInput, entrenadoresUncheckedUpdateManyWithoutDeportistasInput>
  }

  export type entrenadoresScalarWhereInput = {
    AND?: entrenadoresScalarWhereInput | entrenadoresScalarWhereInput[]
    OR?: entrenadoresScalarWhereInput[]
    NOT?: entrenadoresScalarWhereInput | entrenadoresScalarWhereInput[]
    id?: IntFilter<"entrenadores"> | number
    nombre?: StringNullableFilter<"entrenadores"> | string | null
    apellidos?: StringNullableFilter<"entrenadores"> | string | null
    dni?: StringNullableFilter<"entrenadores"> | string | null
    telefono?: BigIntNullableFilter<"entrenadores"> | bigint | number | null
    fecha_nacimiento?: DateTimeNullableFilter<"entrenadores"> | Date | string | null
    user_id?: StringNullableFilter<"entrenadores"> | string | null
    deportista_id?: StringNullableFilter<"entrenadores"> | string | null
  }

  export type events_resultadoUpsertWithWhereUniqueWithoutDeportistasInput = {
    where: events_resultadoWhereUniqueInput
    update: XOR<events_resultadoUpdateWithoutDeportistasInput, events_resultadoUncheckedUpdateWithoutDeportistasInput>
    create: XOR<events_resultadoCreateWithoutDeportistasInput, events_resultadoUncheckedCreateWithoutDeportistasInput>
  }

  export type events_resultadoUpdateWithWhereUniqueWithoutDeportistasInput = {
    where: events_resultadoWhereUniqueInput
    data: XOR<events_resultadoUpdateWithoutDeportistasInput, events_resultadoUncheckedUpdateWithoutDeportistasInput>
  }

  export type events_resultadoUpdateManyWithWhereWithoutDeportistasInput = {
    where: events_resultadoScalarWhereInput
    data: XOR<events_resultadoUpdateManyMutationInput, events_resultadoUncheckedUpdateManyWithoutDeportistasInput>
  }

  export type events_resultadoScalarWhereInput = {
    AND?: events_resultadoScalarWhereInput | events_resultadoScalarWhereInput[]
    OR?: events_resultadoScalarWhereInput[]
    NOT?: events_resultadoScalarWhereInput | events_resultadoScalarWhereInput[]
    id?: IntFilter<"events_resultado"> | number
    tiempo?: DateTimeNullableFilter<"events_resultado"> | Date | string | null
    posicion?: IntNullableFilter<"events_resultado"> | number | null
    valoracion_escala?: DecimalNullableFilter<"events_resultado"> | Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: StringNullableFilter<"events_resultado"> | string | null
    valoracion_entrenador?: StringNullableFilter<"events_resultado"> | string | null
    evento_id?: IntNullableFilter<"events_resultado"> | number | null
    deportista_id?: StringNullableFilter<"events_resultado"> | string | null
  }

  export type userCreateWithoutEntrenadoresInput = {
    id: string
    name: string
    email: string
    emailVerified: number
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: $Enums.user_role | null
    banned?: number | null
    banReason?: string | null
    banExpires?: Date | string | null
    deportistas?: deportistasCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutEntrenadoresInput = {
    id: string
    name: string
    email: string
    emailVerified: number
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    role?: $Enums.user_role | null
    banned?: number | null
    banReason?: string | null
    banExpires?: Date | string | null
    deportistas?: deportistasUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutEntrenadoresInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutEntrenadoresInput, userUncheckedCreateWithoutEntrenadoresInput>
  }

  export type deportistasCreateWithoutEntrenadoresInput = {
    numero_licencia: string
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    ftp?: Decimal | DecimalJsLike | number | string | null
    pulso?: number | null
    user?: userCreateNestedOneWithoutDeportistasInput
    events_resultado?: events_resultadoCreateNestedManyWithoutDeportistasInput
  }

  export type deportistasUncheckedCreateWithoutEntrenadoresInput = {
    numero_licencia: string
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    ftp?: Decimal | DecimalJsLike | number | string | null
    pulso?: number | null
    user_id?: string | null
    events_resultado?: events_resultadoUncheckedCreateNestedManyWithoutDeportistasInput
  }

  export type deportistasCreateOrConnectWithoutEntrenadoresInput = {
    where: deportistasWhereUniqueInput
    create: XOR<deportistasCreateWithoutEntrenadoresInput, deportistasUncheckedCreateWithoutEntrenadoresInput>
  }

  export type userUpsertWithoutEntrenadoresInput = {
    update: XOR<userUpdateWithoutEntrenadoresInput, userUncheckedUpdateWithoutEntrenadoresInput>
    create: XOR<userCreateWithoutEntrenadoresInput, userUncheckedCreateWithoutEntrenadoresInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutEntrenadoresInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutEntrenadoresInput, userUncheckedUpdateWithoutEntrenadoresInput>
  }

  export type userUpdateWithoutEntrenadoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    banned?: NullableIntFieldUpdateOperationsInput | number | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deportistas?: deportistasUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutEntrenadoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    banned?: NullableIntFieldUpdateOperationsInput | number | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deportistas?: deportistasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type deportistasUpsertWithoutEntrenadoresInput = {
    update: XOR<deportistasUpdateWithoutEntrenadoresInput, deportistasUncheckedUpdateWithoutEntrenadoresInput>
    create: XOR<deportistasCreateWithoutEntrenadoresInput, deportistasUncheckedCreateWithoutEntrenadoresInput>
    where?: deportistasWhereInput
  }

  export type deportistasUpdateToOneWithWhereWithoutEntrenadoresInput = {
    where?: deportistasWhereInput
    data: XOR<deportistasUpdateWithoutEntrenadoresInput, deportistasUncheckedUpdateWithoutEntrenadoresInput>
  }

  export type deportistasUpdateWithoutEntrenadoresInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ftp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulso?: NullableIntFieldUpdateOperationsInput | number | null
    user?: userUpdateOneWithoutDeportistasNestedInput
    events_resultado?: events_resultadoUpdateManyWithoutDeportistasNestedInput
  }

  export type deportistasUncheckedUpdateWithoutEntrenadoresInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ftp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulso?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    events_resultado?: events_resultadoUncheckedUpdateManyWithoutDeportistasNestedInput
  }

  export type events_resultadoCreateWithoutEventsInput = {
    id: number
    tiempo?: Date | string | null
    posicion?: number | null
    valoracion_escala?: Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: string | null
    valoracion_entrenador?: string | null
    deportistas?: deportistasCreateNestedOneWithoutEvents_resultadoInput
  }

  export type events_resultadoUncheckedCreateWithoutEventsInput = {
    id: number
    tiempo?: Date | string | null
    posicion?: number | null
    valoracion_escala?: Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: string | null
    valoracion_entrenador?: string | null
    deportista_id?: string | null
  }

  export type events_resultadoCreateOrConnectWithoutEventsInput = {
    where: events_resultadoWhereUniqueInput
    create: XOR<events_resultadoCreateWithoutEventsInput, events_resultadoUncheckedCreateWithoutEventsInput>
  }

  export type events_resultadoCreateManyEventsInputEnvelope = {
    data: events_resultadoCreateManyEventsInput | events_resultadoCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type events_resultadoUpsertWithWhereUniqueWithoutEventsInput = {
    where: events_resultadoWhereUniqueInput
    update: XOR<events_resultadoUpdateWithoutEventsInput, events_resultadoUncheckedUpdateWithoutEventsInput>
    create: XOR<events_resultadoCreateWithoutEventsInput, events_resultadoUncheckedCreateWithoutEventsInput>
  }

  export type events_resultadoUpdateWithWhereUniqueWithoutEventsInput = {
    where: events_resultadoWhereUniqueInput
    data: XOR<events_resultadoUpdateWithoutEventsInput, events_resultadoUncheckedUpdateWithoutEventsInput>
  }

  export type events_resultadoUpdateManyWithWhereWithoutEventsInput = {
    where: events_resultadoScalarWhereInput
    data: XOR<events_resultadoUpdateManyMutationInput, events_resultadoUncheckedUpdateManyWithoutEventsInput>
  }

  export type eventsCreateWithoutEvents_resultadoInput = {
    id: number
    nombre?: string | null
    fecha?: Date | string | null
    lugar?: string | null
    categoria?: $Enums.events_categoria | null
    modalidad?: $Enums.events_modalidad | null
    descripcion?: string | null
  }

  export type eventsUncheckedCreateWithoutEvents_resultadoInput = {
    id: number
    nombre?: string | null
    fecha?: Date | string | null
    lugar?: string | null
    categoria?: $Enums.events_categoria | null
    modalidad?: $Enums.events_modalidad | null
    descripcion?: string | null
  }

  export type eventsCreateOrConnectWithoutEvents_resultadoInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutEvents_resultadoInput, eventsUncheckedCreateWithoutEvents_resultadoInput>
  }

  export type deportistasCreateWithoutEvents_resultadoInput = {
    numero_licencia: string
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    ftp?: Decimal | DecimalJsLike | number | string | null
    pulso?: number | null
    user?: userCreateNestedOneWithoutDeportistasInput
    entrenadores?: entrenadoresCreateNestedManyWithoutDeportistasInput
  }

  export type deportistasUncheckedCreateWithoutEvents_resultadoInput = {
    numero_licencia: string
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    ftp?: Decimal | DecimalJsLike | number | string | null
    pulso?: number | null
    user_id?: string | null
    entrenadores?: entrenadoresUncheckedCreateNestedManyWithoutDeportistasInput
  }

  export type deportistasCreateOrConnectWithoutEvents_resultadoInput = {
    where: deportistasWhereUniqueInput
    create: XOR<deportistasCreateWithoutEvents_resultadoInput, deportistasUncheckedCreateWithoutEvents_resultadoInput>
  }

  export type eventsUpsertWithoutEvents_resultadoInput = {
    update: XOR<eventsUpdateWithoutEvents_resultadoInput, eventsUncheckedUpdateWithoutEvents_resultadoInput>
    create: XOR<eventsCreateWithoutEvents_resultadoInput, eventsUncheckedCreateWithoutEvents_resultadoInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutEvents_resultadoInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutEvents_resultadoInput, eventsUncheckedUpdateWithoutEvents_resultadoInput>
  }

  export type eventsUpdateWithoutEvents_resultadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableEnumevents_categoriaFieldUpdateOperationsInput | $Enums.events_categoria | null
    modalidad?: NullableEnumevents_modalidadFieldUpdateOperationsInput | $Enums.events_modalidad | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventsUncheckedUpdateWithoutEvents_resultadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableEnumevents_categoriaFieldUpdateOperationsInput | $Enums.events_categoria | null
    modalidad?: NullableEnumevents_modalidadFieldUpdateOperationsInput | $Enums.events_modalidad | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type deportistasUpsertWithoutEvents_resultadoInput = {
    update: XOR<deportistasUpdateWithoutEvents_resultadoInput, deportistasUncheckedUpdateWithoutEvents_resultadoInput>
    create: XOR<deportistasCreateWithoutEvents_resultadoInput, deportistasUncheckedCreateWithoutEvents_resultadoInput>
    where?: deportistasWhereInput
  }

  export type deportistasUpdateToOneWithWhereWithoutEvents_resultadoInput = {
    where?: deportistasWhereInput
    data: XOR<deportistasUpdateWithoutEvents_resultadoInput, deportistasUncheckedUpdateWithoutEvents_resultadoInput>
  }

  export type deportistasUpdateWithoutEvents_resultadoInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ftp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulso?: NullableIntFieldUpdateOperationsInput | number | null
    user?: userUpdateOneWithoutDeportistasNestedInput
    entrenadores?: entrenadoresUpdateManyWithoutDeportistasNestedInput
  }

  export type deportistasUncheckedUpdateWithoutEvents_resultadoInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ftp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulso?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    entrenadores?: entrenadoresUncheckedUpdateManyWithoutDeportistasNestedInput
  }

  export type deportistasCreateWithoutUserInput = {
    numero_licencia: string
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    ftp?: Decimal | DecimalJsLike | number | string | null
    pulso?: number | null
    entrenadores?: entrenadoresCreateNestedManyWithoutDeportistasInput
    events_resultado?: events_resultadoCreateNestedManyWithoutDeportistasInput
  }

  export type deportistasUncheckedCreateWithoutUserInput = {
    numero_licencia: string
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    ftp?: Decimal | DecimalJsLike | number | string | null
    pulso?: number | null
    entrenadores?: entrenadoresUncheckedCreateNestedManyWithoutDeportistasInput
    events_resultado?: events_resultadoUncheckedCreateNestedManyWithoutDeportistasInput
  }

  export type deportistasCreateOrConnectWithoutUserInput = {
    where: deportistasWhereUniqueInput
    create: XOR<deportistasCreateWithoutUserInput, deportistasUncheckedCreateWithoutUserInput>
  }

  export type deportistasCreateManyUserInputEnvelope = {
    data: deportistasCreateManyUserInput | deportistasCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type entrenadoresCreateWithoutUserInput = {
    id: number
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    deportistas?: deportistasCreateNestedOneWithoutEntrenadoresInput
  }

  export type entrenadoresUncheckedCreateWithoutUserInput = {
    id: number
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    deportista_id?: string | null
  }

  export type entrenadoresCreateOrConnectWithoutUserInput = {
    where: entrenadoresWhereUniqueInput
    create: XOR<entrenadoresCreateWithoutUserInput, entrenadoresUncheckedCreateWithoutUserInput>
  }

  export type entrenadoresCreateManyUserInputEnvelope = {
    data: entrenadoresCreateManyUserInput | entrenadoresCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type deportistasUpsertWithWhereUniqueWithoutUserInput = {
    where: deportistasWhereUniqueInput
    update: XOR<deportistasUpdateWithoutUserInput, deportistasUncheckedUpdateWithoutUserInput>
    create: XOR<deportistasCreateWithoutUserInput, deportistasUncheckedCreateWithoutUserInput>
  }

  export type deportistasUpdateWithWhereUniqueWithoutUserInput = {
    where: deportistasWhereUniqueInput
    data: XOR<deportistasUpdateWithoutUserInput, deportistasUncheckedUpdateWithoutUserInput>
  }

  export type deportistasUpdateManyWithWhereWithoutUserInput = {
    where: deportistasScalarWhereInput
    data: XOR<deportistasUpdateManyMutationInput, deportistasUncheckedUpdateManyWithoutUserInput>
  }

  export type deportistasScalarWhereInput = {
    AND?: deportistasScalarWhereInput | deportistasScalarWhereInput[]
    OR?: deportistasScalarWhereInput[]
    NOT?: deportistasScalarWhereInput | deportistasScalarWhereInput[]
    numero_licencia?: StringFilter<"deportistas"> | string
    nombre?: StringNullableFilter<"deportistas"> | string | null
    apellidos?: StringNullableFilter<"deportistas"> | string | null
    dni?: StringNullableFilter<"deportistas"> | string | null
    telefono?: BigIntNullableFilter<"deportistas"> | bigint | number | null
    fecha_nacimiento?: DateTimeNullableFilter<"deportistas"> | Date | string | null
    peso?: DecimalNullableFilter<"deportistas"> | Decimal | DecimalJsLike | number | string | null
    altura?: DecimalNullableFilter<"deportistas"> | Decimal | DecimalJsLike | number | string | null
    ftp?: DecimalNullableFilter<"deportistas"> | Decimal | DecimalJsLike | number | string | null
    pulso?: IntNullableFilter<"deportistas"> | number | null
    user_id?: StringNullableFilter<"deportistas"> | string | null
  }

  export type entrenadoresUpsertWithWhereUniqueWithoutUserInput = {
    where: entrenadoresWhereUniqueInput
    update: XOR<entrenadoresUpdateWithoutUserInput, entrenadoresUncheckedUpdateWithoutUserInput>
    create: XOR<entrenadoresCreateWithoutUserInput, entrenadoresUncheckedCreateWithoutUserInput>
  }

  export type entrenadoresUpdateWithWhereUniqueWithoutUserInput = {
    where: entrenadoresWhereUniqueInput
    data: XOR<entrenadoresUpdateWithoutUserInput, entrenadoresUncheckedUpdateWithoutUserInput>
  }

  export type entrenadoresUpdateManyWithWhereWithoutUserInput = {
    where: entrenadoresScalarWhereInput
    data: XOR<entrenadoresUpdateManyMutationInput, entrenadoresUncheckedUpdateManyWithoutUserInput>
  }

  export type entrenadoresCreateManyDeportistasInput = {
    id: number
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    user_id?: string | null
  }

  export type events_resultadoCreateManyDeportistasInput = {
    id: number
    tiempo?: Date | string | null
    posicion?: number | null
    valoracion_escala?: Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: string | null
    valoracion_entrenador?: string | null
    evento_id?: number | null
  }

  export type entrenadoresUpdateWithoutDeportistasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutEntrenadoresNestedInput
  }

  export type entrenadoresUncheckedUpdateWithoutDeportistasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type entrenadoresUncheckedUpdateManyWithoutDeportistasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type events_resultadoUpdateWithoutDeportistasInput = {
    id?: IntFieldUpdateOperationsInput | number
    tiempo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posicion?: NullableIntFieldUpdateOperationsInput | number | null
    valoracion_escala?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: NullableStringFieldUpdateOperationsInput | string | null
    valoracion_entrenador?: NullableStringFieldUpdateOperationsInput | string | null
    events?: eventsUpdateOneWithoutEvents_resultadoNestedInput
  }

  export type events_resultadoUncheckedUpdateWithoutDeportistasInput = {
    id?: IntFieldUpdateOperationsInput | number
    tiempo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posicion?: NullableIntFieldUpdateOperationsInput | number | null
    valoracion_escala?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: NullableStringFieldUpdateOperationsInput | string | null
    valoracion_entrenador?: NullableStringFieldUpdateOperationsInput | string | null
    evento_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type events_resultadoUncheckedUpdateManyWithoutDeportistasInput = {
    id?: IntFieldUpdateOperationsInput | number
    tiempo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posicion?: NullableIntFieldUpdateOperationsInput | number | null
    valoracion_escala?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: NullableStringFieldUpdateOperationsInput | string | null
    valoracion_entrenador?: NullableStringFieldUpdateOperationsInput | string | null
    evento_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type events_resultadoCreateManyEventsInput = {
    id: number
    tiempo?: Date | string | null
    posicion?: number | null
    valoracion_escala?: Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: string | null
    valoracion_entrenador?: string | null
    deportista_id?: string | null
  }

  export type events_resultadoUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tiempo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posicion?: NullableIntFieldUpdateOperationsInput | number | null
    valoracion_escala?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: NullableStringFieldUpdateOperationsInput | string | null
    valoracion_entrenador?: NullableStringFieldUpdateOperationsInput | string | null
    deportistas?: deportistasUpdateOneWithoutEvents_resultadoNestedInput
  }

  export type events_resultadoUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tiempo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posicion?: NullableIntFieldUpdateOperationsInput | number | null
    valoracion_escala?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: NullableStringFieldUpdateOperationsInput | string | null
    valoracion_entrenador?: NullableStringFieldUpdateOperationsInput | string | null
    deportista_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type events_resultadoUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tiempo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posicion?: NullableIntFieldUpdateOperationsInput | number | null
    valoracion_escala?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valoracion_deportista?: NullableStringFieldUpdateOperationsInput | string | null
    valoracion_entrenador?: NullableStringFieldUpdateOperationsInput | string | null
    deportista_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type deportistasCreateManyUserInput = {
    numero_licencia: string
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    ftp?: Decimal | DecimalJsLike | number | string | null
    pulso?: number | null
  }

  export type entrenadoresCreateManyUserInput = {
    id: number
    nombre?: string | null
    apellidos?: string | null
    dni?: string | null
    telefono?: bigint | number | null
    fecha_nacimiento?: Date | string | null
    deportista_id?: string | null
  }

  export type deportistasUpdateWithoutUserInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ftp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulso?: NullableIntFieldUpdateOperationsInput | number | null
    entrenadores?: entrenadoresUpdateManyWithoutDeportistasNestedInput
    events_resultado?: events_resultadoUpdateManyWithoutDeportistasNestedInput
  }

  export type deportistasUncheckedUpdateWithoutUserInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ftp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulso?: NullableIntFieldUpdateOperationsInput | number | null
    entrenadores?: entrenadoresUncheckedUpdateManyWithoutDeportistasNestedInput
    events_resultado?: events_resultadoUncheckedUpdateManyWithoutDeportistasNestedInput
  }

  export type deportistasUncheckedUpdateManyWithoutUserInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ftp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulso?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type entrenadoresUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deportistas?: deportistasUpdateOneWithoutEntrenadoresNestedInput
  }

  export type entrenadoresUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deportista_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type entrenadoresUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deportista_id?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}