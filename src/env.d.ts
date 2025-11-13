interface ImportMetaEnv {
  readonly PUBLIC_SITE_NAME: string;
  readonly PUBLIC_SITE_DESCRIPTION: string;
    //readonly DB_PASSWORD: string;
  //readonly PUBLIC_POKEAPI: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}