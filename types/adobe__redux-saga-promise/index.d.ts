import { Action, Middleware } from 'redux'
import { BaseActionFunctions, ActionMeta, ActionFunction0, ActionFunction1, ActionFunction2, ActionFunction3, ActionFunction4, ActionFunctionAny } from 'redux-actions'

export interface SagaPromiseMiddleware extends Middleware {}
export type PromiseAction<TActionFunc, TReturn,>  = {
  trigger: TActionFunc;
  resolved: Promise<TReturn>,
  rejected: Promise<TReturn>
} & TActionFunc;

export class ArgumentError extends Error {}
export class ConfigurationError extends Error {}

export function createPromiseAction<TReturn>(prefix: string): PromiseAction<ActionFunctionAny<Action<any>>, TReturn>;
export function createPromiseAction<Payload, TReturn>(prefix: string, payloadCreator: ActionFunction0<Payload>): PromiseAction<ActionFunction0<Action<Payload>>, TReturn>;
export function createPromiseAction<Payload, Arg1, TReturn>(prefix: string, payloadCreator: ActionFunction1<Arg1, Payload>): PromiseAction<ActionFunction1<Arg1, Action<Payload>>, TReturn>;
export function createPromiseAction<Payload, Arg1, Arg2, TReturn>(prefix: string, payloadCreator: ActionFunction2<Arg1, Arg2, Payload>): PromiseAction<ActionFunction2<Arg1, Arg2, Action<Payload>>, TReturn>;
export function createPromiseAction<Payload, Arg1, Arg2, Arg3, TReturn>(prefix: string, payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>): PromiseAction<ActionFunction3<Arg1, Arg2, Arg3, Action<Payload>>, TReturn>;
export function createPromiseAction<Payload, Arg1, Arg2, Arg3, Arg4, TReturn>(prefix: string, payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>): PromiseAction<ActionFunction4<Arg1, Arg2, Arg3, Arg4, Action<Payload>>, TReturn>;
export function createPromiseAction<Payload, TReturn>(prefix: string): PromiseAction<ActionFunction1<Payload, Action<Payload>>, TReturn>;
export function createPromiseAction<Meta, TReturn>(prefix: string, payloadCreator: null | undefined, metaCreator: ActionFunctionAny<Meta>): PromiseAction<ActionFunctionAny<ActionMeta<any, Meta>>, TReturn>;
export function createPromiseAction<Payload, Meta, TReturn>(prefix: string, payloadCreator: ActionFunctionAny<Payload>, metaCreator: ActionFunctionAny<Meta>): PromiseAction<ActionFunctionAny<ActionMeta<Payload, Meta>>, TReturn>;
export function createPromiseAction<Payload, Meta, Arg1, TReturn>(prefix: string, payloadCreator: ActionFunction1<Arg1, Payload>, metaCreator: ActionFunction1<Arg1, Meta>): PromiseAction<ActionFunction1<Arg1, ActionMeta<Payload, Meta>>, TReturn>;
export function createPromiseAction<Payload, Meta, Arg1, Arg2, TReturn>(prefix: string, payloadCreator: ActionFunction2<Arg1, Arg2, Payload>, metaCreator: ActionFunction2<Arg1, Arg2, Meta>): PromiseAction<ActionFunction2<Arg1, Arg2, ActionMeta<Payload, Meta>>, TReturn>;
export function createPromiseAction<Payload, Meta, Arg1, Arg2, Arg3, TReturn>(prefix: string, payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>, metaCreator: ActionFunction3<Arg1, Arg2, Arg3, Meta>): PromiseAction<ActionFunction3<Arg1, Arg2, Arg3, ActionMeta<Payload, Meta>>, TReturn>;
export function createPromiseAction<Payload, Meta, Arg1, Arg2, Arg3, Arg4, TReturn>(prefix: string, payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>, metaCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Meta>): PromiseAction<ActionFunction4<Arg1, Arg2, Arg3, Arg4, ActionMeta<Payload, Meta>>, TReturn>;



export function promiseMiddleware (): SagaPromiseMiddleware
