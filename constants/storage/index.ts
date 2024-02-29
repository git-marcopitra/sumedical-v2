export enum StorageKey {
  USER_DATA = 'user-data',
}

export type TStorageKey = `v${number}-${string}-${StorageKey}`;

export const STORAGE_VERSION = 'v1';

export const STORAGE_KEYS: Record<StorageKey, TStorageKey> = {
  [StorageKey.USER_DATA]: `${STORAGE_VERSION}-sumedical-${StorageKey.USER_DATA}`,
};
