/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IGenericHandlerInterface extends ethers.utils.Interface {
  functions: {
    "MapContract((address,uint8,address))": FunctionFragment;
    "UnMapContract((address,uint8,address))": FunctionFragment;
    "fetch_chainID()": FunctionFragment;
    "genericDeposit(uint8,bytes,uint256,uint256,address)": FunctionFragment;
    "replayGenericDeposit(uint8,uint64,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MapContract",
    values: [
      {
        _rSyncContract: string;
        _chainID: BigNumberish;
        _linkedContract: string;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "UnMapContract",
    values: [
      {
        _rSyncContract: string;
        _chainID: BigNumberish;
        _linkedContract: string;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fetch_chainID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "genericDeposit",
    values: [BigNumberish, BytesLike, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "replayGenericDeposit",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "MapContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UnMapContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fetch_chainID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "genericDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "replayGenericDeposit",
    data: BytesLike
  ): Result;

  events: {};
}

export class IGenericHandler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IGenericHandlerInterface;

  functions: {
    MapContract(
      linker: {
        _rSyncContract: string;
        _chainID: BigNumberish;
        _linkedContract: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    UnMapContract(
      linker: {
        _rSyncContract: string;
        _chainID: BigNumberish;
        _linkedContract: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fetch_chainID(overrides?: CallOverrides): Promise<[number]>;

    genericDeposit(
      _destChainID: BigNumberish,
      _data: BytesLike,
      _gasLimit: BigNumberish,
      _gasPrice: BigNumberish,
      _feeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    replayGenericDeposit(
      _destChainID: BigNumberish,
      _depositNonce: BigNumberish,
      _gasLimit: BigNumberish,
      _gasPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  MapContract(
    linker: {
      _rSyncContract: string;
      _chainID: BigNumberish;
      _linkedContract: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  UnMapContract(
    linker: {
      _rSyncContract: string;
      _chainID: BigNumberish;
      _linkedContract: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fetch_chainID(overrides?: CallOverrides): Promise<number>;

  genericDeposit(
    _destChainID: BigNumberish,
    _data: BytesLike,
    _gasLimit: BigNumberish,
    _gasPrice: BigNumberish,
    _feeToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  replayGenericDeposit(
    _destChainID: BigNumberish,
    _depositNonce: BigNumberish,
    _gasLimit: BigNumberish,
    _gasPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MapContract(
      linker: {
        _rSyncContract: string;
        _chainID: BigNumberish;
        _linkedContract: string;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    UnMapContract(
      linker: {
        _rSyncContract: string;
        _chainID: BigNumberish;
        _linkedContract: string;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    fetch_chainID(overrides?: CallOverrides): Promise<number>;

    genericDeposit(
      _destChainID: BigNumberish,
      _data: BytesLike,
      _gasLimit: BigNumberish,
      _gasPrice: BigNumberish,
      _feeToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    replayGenericDeposit(
      _destChainID: BigNumberish,
      _depositNonce: BigNumberish,
      _gasLimit: BigNumberish,
      _gasPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    MapContract(
      linker: {
        _rSyncContract: string;
        _chainID: BigNumberish;
        _linkedContract: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    UnMapContract(
      linker: {
        _rSyncContract: string;
        _chainID: BigNumberish;
        _linkedContract: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fetch_chainID(overrides?: CallOverrides): Promise<BigNumber>;

    genericDeposit(
      _destChainID: BigNumberish,
      _data: BytesLike,
      _gasLimit: BigNumberish,
      _gasPrice: BigNumberish,
      _feeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    replayGenericDeposit(
      _destChainID: BigNumberish,
      _depositNonce: BigNumberish,
      _gasLimit: BigNumberish,
      _gasPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MapContract(
      linker: {
        _rSyncContract: string;
        _chainID: BigNumberish;
        _linkedContract: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    UnMapContract(
      linker: {
        _rSyncContract: string;
        _chainID: BigNumberish;
        _linkedContract: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fetch_chainID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    genericDeposit(
      _destChainID: BigNumberish,
      _data: BytesLike,
      _gasLimit: BigNumberish,
      _gasPrice: BigNumberish,
      _feeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    replayGenericDeposit(
      _destChainID: BigNumberish,
      _depositNonce: BigNumberish,
      _gasLimit: BigNumberish,
      _gasPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
