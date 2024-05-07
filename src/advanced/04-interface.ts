//solamente las propiedades que van a ser publicas se deben agregar a la interfaz.
export interface Driver {
  port?: number;
  host?: number;
  database: string;
  password: string;

  connect(): void;
  disconnect(): void;
  isConnected?(name: string): boolean;
}

class OracleDriver implements Driver {
  constructor(
    public database: string = "",
    public password: string = "",
    private name: string = ""
  ) {}

  connect(): void {}

  disconnect(): void {}
}
