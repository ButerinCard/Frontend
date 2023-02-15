// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ButerinCardsGoerliTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Card = {
  id: Scalars['ID'];
  dateMined: Scalars['BigInt'];
  miner: Scalars['String'];
  colorId: Scalars['BigInt'];
  phaseId: Scalars['BigInt'];
  tokenIdInPhase: Scalars['BigInt'];
  quoteId: Scalars['BigInt'];
  seed: Scalars['BigInt'];
  lastTokenIdInScan: Scalars['BigInt'];
};

export type Card_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  dateMined?: InputMaybe<Scalars['BigInt']>;
  dateMined_not?: InputMaybe<Scalars['BigInt']>;
  dateMined_gt?: InputMaybe<Scalars['BigInt']>;
  dateMined_lt?: InputMaybe<Scalars['BigInt']>;
  dateMined_gte?: InputMaybe<Scalars['BigInt']>;
  dateMined_lte?: InputMaybe<Scalars['BigInt']>;
  dateMined_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dateMined_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  miner?: InputMaybe<Scalars['String']>;
  miner_not?: InputMaybe<Scalars['String']>;
  miner_gt?: InputMaybe<Scalars['String']>;
  miner_lt?: InputMaybe<Scalars['String']>;
  miner_gte?: InputMaybe<Scalars['String']>;
  miner_lte?: InputMaybe<Scalars['String']>;
  miner_in?: InputMaybe<Array<Scalars['String']>>;
  miner_not_in?: InputMaybe<Array<Scalars['String']>>;
  miner_contains?: InputMaybe<Scalars['String']>;
  miner_contains_nocase?: InputMaybe<Scalars['String']>;
  miner_not_contains?: InputMaybe<Scalars['String']>;
  miner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  miner_starts_with?: InputMaybe<Scalars['String']>;
  miner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  miner_not_starts_with?: InputMaybe<Scalars['String']>;
  miner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  miner_ends_with?: InputMaybe<Scalars['String']>;
  miner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  miner_not_ends_with?: InputMaybe<Scalars['String']>;
  miner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  colorId?: InputMaybe<Scalars['BigInt']>;
  colorId_not?: InputMaybe<Scalars['BigInt']>;
  colorId_gt?: InputMaybe<Scalars['BigInt']>;
  colorId_lt?: InputMaybe<Scalars['BigInt']>;
  colorId_gte?: InputMaybe<Scalars['BigInt']>;
  colorId_lte?: InputMaybe<Scalars['BigInt']>;
  colorId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  colorId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  phaseId?: InputMaybe<Scalars['BigInt']>;
  phaseId_not?: InputMaybe<Scalars['BigInt']>;
  phaseId_gt?: InputMaybe<Scalars['BigInt']>;
  phaseId_lt?: InputMaybe<Scalars['BigInt']>;
  phaseId_gte?: InputMaybe<Scalars['BigInt']>;
  phaseId_lte?: InputMaybe<Scalars['BigInt']>;
  phaseId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  phaseId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIdInPhase?: InputMaybe<Scalars['BigInt']>;
  tokenIdInPhase_not?: InputMaybe<Scalars['BigInt']>;
  tokenIdInPhase_gt?: InputMaybe<Scalars['BigInt']>;
  tokenIdInPhase_lt?: InputMaybe<Scalars['BigInt']>;
  tokenIdInPhase_gte?: InputMaybe<Scalars['BigInt']>;
  tokenIdInPhase_lte?: InputMaybe<Scalars['BigInt']>;
  tokenIdInPhase_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIdInPhase_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quoteId?: InputMaybe<Scalars['BigInt']>;
  quoteId_not?: InputMaybe<Scalars['BigInt']>;
  quoteId_gt?: InputMaybe<Scalars['BigInt']>;
  quoteId_lt?: InputMaybe<Scalars['BigInt']>;
  quoteId_gte?: InputMaybe<Scalars['BigInt']>;
  quoteId_lte?: InputMaybe<Scalars['BigInt']>;
  quoteId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quoteId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  seed?: InputMaybe<Scalars['BigInt']>;
  seed_not?: InputMaybe<Scalars['BigInt']>;
  seed_gt?: InputMaybe<Scalars['BigInt']>;
  seed_lt?: InputMaybe<Scalars['BigInt']>;
  seed_gte?: InputMaybe<Scalars['BigInt']>;
  seed_lte?: InputMaybe<Scalars['BigInt']>;
  seed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  seed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastTokenIdInScan?: InputMaybe<Scalars['BigInt']>;
  lastTokenIdInScan_not?: InputMaybe<Scalars['BigInt']>;
  lastTokenIdInScan_gt?: InputMaybe<Scalars['BigInt']>;
  lastTokenIdInScan_lt?: InputMaybe<Scalars['BigInt']>;
  lastTokenIdInScan_gte?: InputMaybe<Scalars['BigInt']>;
  lastTokenIdInScan_lte?: InputMaybe<Scalars['BigInt']>;
  lastTokenIdInScan_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastTokenIdInScan_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Card_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Card_filter>>>;
};

export type Card_orderBy =
  | 'id'
  | 'dateMined'
  | 'miner'
  | 'colorId'
  | 'phaseId'
  | 'tokenIdInPhase'
  | 'quoteId'
  | 'seed'
  | 'lastTokenIdInScan';

export type Miner = {
  id: Scalars['ID'];
  kiloBytes: Scalars['BigInt'];
};

export type Miner_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  kiloBytes?: InputMaybe<Scalars['BigInt']>;
  kiloBytes_not?: InputMaybe<Scalars['BigInt']>;
  kiloBytes_gt?: InputMaybe<Scalars['BigInt']>;
  kiloBytes_lt?: InputMaybe<Scalars['BigInt']>;
  kiloBytes_gte?: InputMaybe<Scalars['BigInt']>;
  kiloBytes_lte?: InputMaybe<Scalars['BigInt']>;
  kiloBytes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  kiloBytes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Miner_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Miner_filter>>>;
};

export type Miner_orderBy =
  | 'id'
  | 'kiloBytes';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  miner?: Maybe<Miner>;
  miners: Array<Miner>;
  card?: Maybe<Card>;
  cards: Array<Card>;
  totalUploaded?: Maybe<TotalUploaded>;
  totalUploadeds: Array<TotalUploaded>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryminerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryminersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Miner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Miner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycardArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycardsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Card_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Card_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytotalUploadedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytotalUploadedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TotalUploaded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TotalUploaded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  miner?: Maybe<Miner>;
  miners: Array<Miner>;
  card?: Maybe<Card>;
  cards: Array<Card>;
  totalUploaded?: Maybe<TotalUploaded>;
  totalUploadeds: Array<TotalUploaded>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionminerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionminersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Miner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Miner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncardArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncardsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Card_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Card_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontotalUploadedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontotalUploadedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TotalUploaded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TotalUploaded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TotalUploaded = {
  id: Scalars['ID'];
  kiloBytes: Scalars['BigInt'];
};

export type TotalUploaded_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  kiloBytes?: InputMaybe<Scalars['BigInt']>;
  kiloBytes_not?: InputMaybe<Scalars['BigInt']>;
  kiloBytes_gt?: InputMaybe<Scalars['BigInt']>;
  kiloBytes_lt?: InputMaybe<Scalars['BigInt']>;
  kiloBytes_gte?: InputMaybe<Scalars['BigInt']>;
  kiloBytes_lte?: InputMaybe<Scalars['BigInt']>;
  kiloBytes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  kiloBytes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TotalUploaded_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TotalUploaded_filter>>>;
};

export type TotalUploaded_orderBy =
  | 'id'
  | 'kiloBytes';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  miner: InContextSdkMethod<Query['miner'], QueryminerArgs, MeshContext>,
  /** null **/
  miners: InContextSdkMethod<Query['miners'], QueryminersArgs, MeshContext>,
  /** null **/
  card: InContextSdkMethod<Query['card'], QuerycardArgs, MeshContext>,
  /** null **/
  cards: InContextSdkMethod<Query['cards'], QuerycardsArgs, MeshContext>,
  /** null **/
  totalUploaded: InContextSdkMethod<Query['totalUploaded'], QuerytotalUploadedArgs, MeshContext>,
  /** null **/
  totalUploadeds: InContextSdkMethod<Query['totalUploadeds'], QuerytotalUploadedsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  miner: InContextSdkMethod<Subscription['miner'], SubscriptionminerArgs, MeshContext>,
  /** null **/
  miners: InContextSdkMethod<Subscription['miners'], SubscriptionminersArgs, MeshContext>,
  /** null **/
  card: InContextSdkMethod<Subscription['card'], SubscriptioncardArgs, MeshContext>,
  /** null **/
  cards: InContextSdkMethod<Subscription['cards'], SubscriptioncardsArgs, MeshContext>,
  /** null **/
  totalUploaded: InContextSdkMethod<Subscription['totalUploaded'], SubscriptiontotalUploadedArgs, MeshContext>,
  /** null **/
  totalUploadeds: InContextSdkMethod<Subscription['totalUploadeds'], SubscriptiontotalUploadedsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["ButerinCardsGoerli"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
