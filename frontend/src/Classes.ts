export class CheckDto {
  item: number;
  descricao: string;
  situacao: number;
  motivo: string;

  constructor(
    item: number,
    descricao: string,
    situacao: number,
    motivo: string
  ) {
    this.item = item;
    this.descricao = descricao;
    this.situacao = situacao;
    this.motivo = motivo;
  }
}
