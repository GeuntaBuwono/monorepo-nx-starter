import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "wallet.activity" */
  delete_wallet_activity?: Maybe<Wallet_Activity_Mutation_Response>;
  /** delete single row from the table: "wallet.activity" */
  delete_wallet_activity_by_pk?: Maybe<Wallet_Activity>;
  /** insert data into the table: "wallet.activity" */
  insert_wallet_activity?: Maybe<Wallet_Activity_Mutation_Response>;
  /** insert a single row into the table: "wallet.activity" */
  insert_wallet_activity_one?: Maybe<Wallet_Activity>;
  /** update data of the table: "wallet.activity" */
  update_wallet_activity?: Maybe<Wallet_Activity_Mutation_Response>;
  /** update single row of the table: "wallet.activity" */
  update_wallet_activity_by_pk?: Maybe<Wallet_Activity>;
  /** update multiples rows of table: "wallet.activity" */
  update_wallet_activity_many?: Maybe<Array<Maybe<Wallet_Activity_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Wallet_ActivityArgs = {
  where: Wallet_Activity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Wallet_Activity_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Wallet_ActivityArgs = {
  objects: Array<Wallet_Activity_Insert_Input>;
  on_conflict?: InputMaybe<Wallet_Activity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Wallet_Activity_OneArgs = {
  object: Wallet_Activity_Insert_Input;
  on_conflict?: InputMaybe<Wallet_Activity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Wallet_ActivityArgs = {
  _inc?: InputMaybe<Wallet_Activity_Inc_Input>;
  _set?: InputMaybe<Wallet_Activity_Set_Input>;
  where: Wallet_Activity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Wallet_Activity_By_PkArgs = {
  _inc?: InputMaybe<Wallet_Activity_Inc_Input>;
  _set?: InputMaybe<Wallet_Activity_Set_Input>;
  pk_columns: Wallet_Activity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Wallet_Activity_ManyArgs = {
  updates: Array<Wallet_Activity_Updates>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "wallet.activity" */
  wallet_activity: Array<Wallet_Activity>;
  /** fetch aggregated fields from the table: "wallet.activity" */
  wallet_activity_aggregate: Wallet_Activity_Aggregate;
  /** fetch data from the table: "wallet.activity" using primary key columns */
  wallet_activity_by_pk?: Maybe<Wallet_Activity>;
};


export type Query_RootWallet_ActivityArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallet_Activity_Order_By>>;
  where?: InputMaybe<Wallet_Activity_Bool_Exp>;
};


export type Query_RootWallet_Activity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallet_Activity_Order_By>>;
  where?: InputMaybe<Wallet_Activity_Bool_Exp>;
};


export type Query_RootWallet_Activity_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "wallet.activity" */
  wallet_activity: Array<Wallet_Activity>;
  /** fetch aggregated fields from the table: "wallet.activity" */
  wallet_activity_aggregate: Wallet_Activity_Aggregate;
  /** fetch data from the table: "wallet.activity" using primary key columns */
  wallet_activity_by_pk?: Maybe<Wallet_Activity>;
  /** fetch data from the table in a streaming manner: "wallet.activity" */
  wallet_activity_stream: Array<Wallet_Activity>;
};


export type Subscription_RootWallet_ActivityArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallet_Activity_Order_By>>;
  where?: InputMaybe<Wallet_Activity_Bool_Exp>;
};


export type Subscription_RootWallet_Activity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallet_Activity_Order_By>>;
  where?: InputMaybe<Wallet_Activity_Bool_Exp>;
};


export type Subscription_RootWallet_Activity_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWallet_Activity_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Wallet_Activity_Stream_Cursor_Input>>;
  where?: InputMaybe<Wallet_Activity_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "wallet.activity" */
export type Wallet_Activity = {
  __typename?: 'wallet_activity';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "wallet.activity" */
export type Wallet_Activity_Aggregate = {
  __typename?: 'wallet_activity_aggregate';
  aggregate?: Maybe<Wallet_Activity_Aggregate_Fields>;
  nodes: Array<Wallet_Activity>;
};

/** aggregate fields of "wallet.activity" */
export type Wallet_Activity_Aggregate_Fields = {
  __typename?: 'wallet_activity_aggregate_fields';
  avg?: Maybe<Wallet_Activity_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Wallet_Activity_Max_Fields>;
  min?: Maybe<Wallet_Activity_Min_Fields>;
  stddev?: Maybe<Wallet_Activity_Stddev_Fields>;
  stddev_pop?: Maybe<Wallet_Activity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Wallet_Activity_Stddev_Samp_Fields>;
  sum?: Maybe<Wallet_Activity_Sum_Fields>;
  var_pop?: Maybe<Wallet_Activity_Var_Pop_Fields>;
  var_samp?: Maybe<Wallet_Activity_Var_Samp_Fields>;
  variance?: Maybe<Wallet_Activity_Variance_Fields>;
};


/** aggregate fields of "wallet.activity" */
export type Wallet_Activity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Wallet_Activity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Wallet_Activity_Avg_Fields = {
  __typename?: 'wallet_activity_avg_fields';
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "wallet.activity". All fields are combined with a logical 'AND'. */
export type Wallet_Activity_Bool_Exp = {
  _and?: InputMaybe<Array<Wallet_Activity_Bool_Exp>>;
  _not?: InputMaybe<Wallet_Activity_Bool_Exp>;
  _or?: InputMaybe<Array<Wallet_Activity_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "wallet.activity" */
export type Wallet_Activity_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'activity_pkey';

/** input type for incrementing numeric columns in table "wallet.activity" */
export type Wallet_Activity_Inc_Input = {
  price?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "wallet.activity" */
export type Wallet_Activity_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Wallet_Activity_Max_Fields = {
  __typename?: 'wallet_activity_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Wallet_Activity_Min_Fields = {
  __typename?: 'wallet_activity_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "wallet.activity" */
export type Wallet_Activity_Mutation_Response = {
  __typename?: 'wallet_activity_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Wallet_Activity>;
};

/** on_conflict condition type for table "wallet.activity" */
export type Wallet_Activity_On_Conflict = {
  constraint: Wallet_Activity_Constraint;
  update_columns?: Array<Wallet_Activity_Update_Column>;
  where?: InputMaybe<Wallet_Activity_Bool_Exp>;
};

/** Ordering options when selecting data from "wallet.activity". */
export type Wallet_Activity_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: wallet.activity */
export type Wallet_Activity_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "wallet.activity" */
export type Wallet_Activity_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'price'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** input type for updating data in table "wallet.activity" */
export type Wallet_Activity_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Wallet_Activity_Stddev_Fields = {
  __typename?: 'wallet_activity_stddev_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Wallet_Activity_Stddev_Pop_Fields = {
  __typename?: 'wallet_activity_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Wallet_Activity_Stddev_Samp_Fields = {
  __typename?: 'wallet_activity_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "wallet_activity" */
export type Wallet_Activity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Wallet_Activity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Wallet_Activity_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Wallet_Activity_Sum_Fields = {
  __typename?: 'wallet_activity_sum_fields';
  price?: Maybe<Scalars['Int']>;
};

/** update columns of table "wallet.activity" */
export type Wallet_Activity_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'price'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

export type Wallet_Activity_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Wallet_Activity_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Wallet_Activity_Set_Input>;
  /** filter the rows which have to be updated */
  where: Wallet_Activity_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Wallet_Activity_Var_Pop_Fields = {
  __typename?: 'wallet_activity_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Wallet_Activity_Var_Samp_Fields = {
  __typename?: 'wallet_activity_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Wallet_Activity_Variance_Fields = {
  __typename?: 'wallet_activity_variance_fields';
  price?: Maybe<Scalars['Float']>;
};

export type AddActivityMutationVariables = Exact<{
  userId: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
}>;


export type AddActivityMutation = { __typename?: 'mutation_root', insert_wallet_activity_one?: { __typename?: 'wallet_activity', created_at: any, description?: string | null, id: any, price?: number | null, updated_at: any, user_id: string, name?: string | null } | null };

export type GetActivityQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActivityQuery = { __typename?: 'query_root', wallet_activity: Array<{ __typename?: 'wallet_activity', id: any, name?: string | null, price?: number | null, updated_at: any, user_id: string, description?: string | null, created_at: any }> };


export const AddActivityDocument = gql`
    mutation AddActivity($userId: String!, $name: String, $price: Int, $description: String) {
  insert_wallet_activity_one(
    object: {user_id: $userId, price: $price, description: $description, name: $name}
  ) {
    created_at
    description
    id
    price
    updated_at
    user_id
    name
  }
}
    `;
export type AddActivityMutationFn = Apollo.MutationFunction<AddActivityMutation, AddActivityMutationVariables>;

/**
 * __useAddActivityMutation__
 *
 * To run a mutation, you first call `useAddActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addActivityMutation, { data, loading, error }] = useAddActivityMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddActivityMutation(baseOptions?: Apollo.MutationHookOptions<AddActivityMutation, AddActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddActivityMutation, AddActivityMutationVariables>(AddActivityDocument, options);
      }
export type AddActivityMutationHookResult = ReturnType<typeof useAddActivityMutation>;
export type AddActivityMutationResult = Apollo.MutationResult<AddActivityMutation>;
export type AddActivityMutationOptions = Apollo.BaseMutationOptions<AddActivityMutation, AddActivityMutationVariables>;
export const GetActivityDocument = gql`
    query GetActivity {
  wallet_activity {
    id
    name
    price
    updated_at
    user_id
    description
    created_at
  }
}
    `;

/**
 * __useGetActivityQuery__
 *
 * To run a query within a React component, call `useGetActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivityQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetActivityQuery(baseOptions?: Apollo.QueryHookOptions<GetActivityQuery, GetActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActivityQuery, GetActivityQueryVariables>(GetActivityDocument, options);
      }
export function useGetActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActivityQuery, GetActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActivityQuery, GetActivityQueryVariables>(GetActivityDocument, options);
        }
export type GetActivityQueryHookResult = ReturnType<typeof useGetActivityQuery>;
export type GetActivityLazyQueryHookResult = ReturnType<typeof useGetActivityLazyQuery>;
export type GetActivityQueryResult = Apollo.QueryResult<GetActivityQuery, GetActivityQueryVariables>;