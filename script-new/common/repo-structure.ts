import * as path from "path";
import {
    isPathExistsSync,
    readDirSync
} from "./filesystem";

export const logoName = `logo`
export const infoName = `info`
export const logoExtension = "png"
export const jsonExtension = "json"
export const logoFullName = `${logoName}.${logoExtension}`
export const infoFullName = `${infoName}.${jsonExtension}`
const whiteList = `whitelist.${jsonExtension}`
const blackList = `blacklist.${jsonExtension}`

export const chainsPath: string = path.join(process.cwd(), '/blockchains')
export const getChainPath = (chain: string): string => `${chainsPath}/${chain}`
export const getChainAssetsPath = (chain: string): string => `${getChainPath(chain)}/assets`
export const getChainAssetLogoPath = (chain: string, asset: string): string => `${getChainAssetsPath(chain)}/${asset}/${logoFullName}`
export const getChainAssetInfoPath = (chain: string, asset: string): string => `${getChainAssetsPath(chain)}/${asset}/${infoFullName}`
export const getChainWhitelistPath = (chain: string): string => `${getChainPath(chain)}/${whiteList}`
export const getChainBlacklistPath = (chain: string): string => `${getChainPath(chain)}/${blackList}`

export const getChainValidatorsPath = (chain: string): string => `${getChainPath(chain)}/validators`
export const getChainValidatorsListPath = (chain: string): string => `${getChainValidatorsPath(chain)}/list.${jsonExtension}`

export const isChainAssetInfoExistSync = (chain: string, address: string) => isPathExistsSync(getChainAssetInfoPath(chain, address))

export const getChainAssetsList = (chain: string): string[] => readDirSync(getChainAssetsPath(chain))