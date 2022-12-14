export type Personagem = {
  Nome: string;
  Build: Array<Build>;
};

export type BuildWithoutAdditionalInfo = {
  Arma: {
    sub_stat: Array<Stat>;
  };
  Capacete: {
    sub_stat: Array<Stat>;
  };
  Armadura: {
    sub_stat: Array<Stat>;
  };
  Colar: {
    main_stat: Stat;
    sub_stat: Array<Stat>;
  };
  Anel: {
    main_stat: Stat;
    sub_stat: Array<Stat>;
  };
  Bota: {
    main_stat: Stat;
    sub_stat: Array<Stat>;
  };
};

export type ItemsWithNoFixedMainStat = {
    Colar: {
      main_stat: Stat;
      sub_stat: Array<Stat>;
    };
    Anel: {
      main_stat: Stat;
      sub_stat: Array<Stat>;
    };
    Bota: {
      main_stat: Stat;
      sub_stat: Array<Stat>;
    };
  };

export type Build = {
  Nome: string;
  Sets: Sets;
  Arma: {
    sub_stat: Array<Stat>;
  };
  Capacete: {
    sub_stat: Array<Stat>;
  };
  Armadura: {
    sub_stat: Array<Stat>;
  };
  Colar: {
    main_stat: Stat;
    sub_stat: Array<Stat>;
  };
  Anel: {
    main_stat: Stat;
    sub_stat: Array<Stat>;
  };
  Bota: {
    main_stat: Stat;
    sub_stat: Array<Stat>;
  };
};

export type Item = "Arma" | "Capacete" | "Armadura" | "Colar" | "Anel" | "Bota";

export type Stat = "HP%" | "C. CRT" | "Velocidade" | "D. CRT";

export type Sets = Array<
  | "HP"
  | "DEF"
  | "ATQ"
  | "Velocidade"
  | "C. CRT"
  | "EF"
  | "D. CRT"
  | "Roubo de Vida"
  | "ContraATQ"
  | "RES"
  | "Uniao"
  | "Raiva"
  | "Imunidade"
  | "DEF Pen."
  | "Ferida"
  | "Torrente"
  | "Barreira"
>;
