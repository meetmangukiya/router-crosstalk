/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IGenericHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGenericHandler__factory>;
    getContractFactory(
      name: "IRouterCrossTalk",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouterCrossTalk__factory>;
    getContractFactory(
      name: "IRouterCrossTalkUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouterCrossTalkUpgradeable__factory>;
    getContractFactory(
      name: "RouterCrossTalk",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RouterCrossTalk__factory>;
    getContractFactory(
      name: "RouterCrossTalkUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RouterCrossTalkUpgradeable__factory>;

    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IGenericHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGenericHandler>;
    getContractAt(
      name: "IRouterCrossTalk",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouterCrossTalk>;
    getContractAt(
      name: "IRouterCrossTalkUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouterCrossTalkUpgradeable>;
    getContractAt(
      name: "RouterCrossTalk",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RouterCrossTalk>;
    getContractAt(
      name: "RouterCrossTalkUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RouterCrossTalkUpgradeable>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}