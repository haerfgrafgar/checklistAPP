export class CheckDto {
  item: number;
  descricao: string;
  situacao: number;

  constructor(item: number, descricao: string, situacao: number) {
    this.item = item;
    this.descricao = descricao;
    this.situacao = situacao;
  }
}
