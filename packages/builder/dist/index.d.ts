import { type BuildOptions, type UserConfig } from 'vite';
type Props = {
    basePath: string;
    /**
     * サーバーのポートを指定します。
     *
     * @default 3000
     */
    port?: number;
    /**
     * グローバル定数の置換を定義します。エントリは開発時にグローバルで定義され、ビルド時に静的に置き換えられます。
     *
     * @default {}
     */
    define?: Record<string, unknown>;
    /**
     * 最終的なバンドルのブラウザ互換性のターゲット。
     * デフォルトは Vite の特別な値 `'modules'` で、
     * これはネイティブ ES モジュール、ネイティブ ESM の動的インポート、import.metaをサポートするブラウザを対象にします。
     *
     * @default {}
     */
    build?: BuildOptions;
    /**
     * エントリオプションとして `@rollup/plugin-alias` に渡されます。
     * `{ find, replacement, customResolver }` の配列か、オブジェクトを指定します。
     *
     * ファイルシステムのパスにエイリアスを設定する場合は、必ず絶対パスを使用してください。
     * 相対的なエイリアス値はそのまま使用され、ファイルシステムのパスには解決されません。
     *
     * @default {}
     */
    alias?: Record<string, string>;
};
export declare function createUserConfig({ basePath, port, define, build, alias }: Props): UserConfig;
export {};
