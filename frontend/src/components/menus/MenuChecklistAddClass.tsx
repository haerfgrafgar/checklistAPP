import { useState } from "react";
import { BulkAddChecks } from "../../Helper";
import {
  ChecklistClassCivilCriterioDeProjetoChecks,
  ChecklistClassCivilMemorialDeCalculo,
  ChecklistClassCivilMemorialDescritivoChecks,
  ChecklistClassCivilRelatoriosChecks,
  ChecklistClassCivilSondagemChecks,
  ChecklistClassEletricaAterramentoESpdaChecks,
  ChecklistClassEletricaCriterioDeProjetoChecks,
  ChecklistClassEletricaDesenhosChecks,
  ChecklistClassEletricaDetalhamentosChecks,
  ChecklistClassEletricaDiagramasChecks,
  ChecklistClassEletricaEspecificacoesTecnicasChecks,
  ChecklistClassEletricaEstudosDeIncidenciaSolarChecks,
  ChecklistClassEletricaListaDeCabosChecks,
  ChecklistClassEletricaListaDeCargasChecks,
  ChecklistClassEletricaListaDeMateriaisChecks,
  ChecklistClassEletricaMemorialDeCalculoChecks,
  ChecklistClassEletricaPlantaDeDistribuicaoDeForcaEControleChecks,
  ChecklistClassEletricaPlantasDeIluminacaoETomadasChecks,
  ChecklistClassEletricaProcedimentosDeMedicaoChecks,
  ChecklistClassEletricaRelatoriosChecks,
  ChecklistClassEletricaRequisicoesDeMaterial,
  ChecklistClassInstrumentacaoCriterioDeProjetoChecks,
  ChecklistClassInstrumentacaoDesenhosChecks,
  ChecklistClassInstrumentacaoDiagramaDeInterligacaoChecks,
  ChecklistClassInstrumentacaoFolhaDeDadosChecks,
  ChecklistClassInstrumentacaoListaDeCabosChecks,
  ChecklistClassInstrumentacaoListaDeCargasEletricasChecks,
  ChecklistClassInstrumentacaoListasChecks,
  ChecklistClassInstrumentacaoMemorialDeCalculoChecks,
  ChecklistClassInstrumentacaoRequisicaoDeMateriaisChecks,
} from "../../Globals";

type Props = {
  checklistId: number;
};

interface Disciplinas {
  CIVIL: boolean;
  ELETRICA: boolean;
  GERAL: boolean;
  INSTRUMENTACAO: boolean;
  MECANICA: boolean;
  PROCESSOS: boolean;
  SEGURANCA: boolean;
  TELECOM: boolean;
  TUBULACOES: boolean;
}

const MenuChecklistAddClass = ({ checklistId }: Props) => {
  const [checklists, setChecklists] = useState<Disciplinas>({
    CIVIL: false,
    ELETRICA: false,
    GERAL: false,
    INSTRUMENTACAO: false,
    MECANICA: false,
    PROCESSOS: false,
    SEGURANCA: false,
    TELECOM: false,
    TUBULACOES: false,
  });

  return (
    <>
      <div className="d-flex">
        <div>
          <button
            onClick={() =>
              setChecklists({ ...checklists, CIVIL: !checklists.CIVIL })
            }
          >
            CIVIL
          </button>
          {checklists.CIVIL && (
            <div>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassCivilCriterioDeProjetoChecks
                  );
                  window.location.reload();
                }}
              >
                CRITÉRIOS DE PROJETO
              </button>
              <button>DESENHOS</button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassCivilMemorialDeCalculo
                  );
                  window.location.reload();
                }}
              >
                MEMORIAL DE CÁLCULO
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassCivilMemorialDescritivoChecks
                  );
                  window.location.reload();
                }}
              >
                MEMORIAL DESCRITIVO
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassCivilRelatoriosChecks
                  );
                  window.location.reload();
                }}
              >
                RELATÓRIOS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(checklistId, ChecklistClassCivilSondagemChecks);
                  window.location.reload();
                }}
              >
                SONDAGEM
              </button>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() =>
              setChecklists({ ...checklists, ELETRICA: !checklists.ELETRICA })
            }
          >
            ELETRICA
          </button>
          {checklists.ELETRICA && (
            <div>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaAterramentoESpdaChecks
                  );
                  window.location.reload();
                }}
              >
                ATERRAMENTO E SPDA
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaCriterioDeProjetoChecks
                  );
                  window.location.reload();
                }}
              >
                CRITÉRIO DE PROJETO
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaDesenhosChecks
                  );
                  window.location.reload();
                }}
              >
                DESENHOS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaDetalhamentosChecks
                  );
                  window.location.reload();
                }}
              >
                DETALHAMENTOS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaDiagramasChecks
                  );
                  window.location.reload();
                }}
              >
                DIAGRAMAS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaEspecificacoesTecnicasChecks
                  );
                  window.location.reload();
                }}
              >
                ESPECIFICAÇÕES TÉCNICAS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaEstudosDeIncidenciaSolarChecks
                  );
                  window.location.reload();
                }}
              >
                ESTUDOS DE INCIDÊNCIA SOLAR
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaListaDeCabosChecks
                  );
                  window.location.reload();
                }}
              >
                LISTA DE CABOS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaListaDeCargasChecks
                  );
                  window.location.reload();
                }}
              >
                LISTA DE CARGAS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaListaDeMateriaisChecks
                  );
                  window.location.reload();
                }}
              >
                LISTA DE MATERIAIS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaMemorialDeCalculoChecks
                  );
                  window.location.reload();
                }}
              >
                MEMORIAL DE CÁLCULO
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaPlantaDeDistribuicaoDeForcaEControleChecks
                  );
                  window.location.reload();
                }}
              >
                PLANTA DE DISTRIBUIÇÃO DE FORÇA E CONTROLE
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaPlantasDeIluminacaoETomadasChecks
                  );
                  window.location.reload();
                }}
              >
                PLANTAS DE ILUMINAÇÃO E TOMADAS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaProcedimentosDeMedicaoChecks
                  );
                  window.location.reload();
                }}
              >
                PROCEDIMENTOS DE MEDIÇÃO
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaRelatoriosChecks
                  );
                  window.location.reload();
                }}
              >
                RELATÓRIOS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassEletricaRequisicoesDeMaterial
                  );
                  window.location.reload();
                }}
              >
                REQUISIÇÕES DE MATERIAL
              </button>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() =>
              setChecklists({
                ...checklists,
                INSTRUMENTACAO: !checklists.INSTRUMENTACAO,
              })
            }
          >
            INSTRUMENTACAO
          </button>
          {checklists.INSTRUMENTACAO && (
            <div>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassInstrumentacaoCriterioDeProjetoChecks
                  );
                  window.location.reload();
                }}
              >
                CRITÉRIO DE PROJETO
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassInstrumentacaoDesenhosChecks
                  );
                  window.location.reload();
                }}
              >
                DESENHOS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassInstrumentacaoDiagramaDeInterligacaoChecks
                  );
                  window.location.reload();
                }}
              >
                DIAGRAMA DE INTERLIGAÇÃO
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassInstrumentacaoFolhaDeDadosChecks
                  );
                  window.location.reload();
                }}
              >
                FOLHA DE DADOS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassInstrumentacaoListaDeCabosChecks
                  );
                  window.location.reload();
                }}
              >
                LISTA DE CABOS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassInstrumentacaoListaDeCargasEletricasChecks
                  );
                  window.location.reload();
                }}
              >
                LISTA DE CARGAS ELÉTRICAS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassInstrumentacaoListasChecks
                  );
                  window.location.reload();
                }}
              >
                LISTAS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassInstrumentacaoMemorialDeCalculoChecks
                  );
                  window.location.reload();
                }}
              >
                MEMORIAL DE CÁLCULO
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassInstrumentacaoRequisicaoDeMateriaisChecks
                  );
                  window.location.reload();
                }}
              >
                REQUISIÇÃO DE MATERIAIS
              </button>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() =>
              setChecklists({ ...checklists, MECANICA: !checklists.MECANICA })
            }
          >
            MECANICA
          </button>
          {checklists.MECANICA && (
            <div>
              <button>ESPECIFICAÇÃO TÉCNICA</button>
              <button>PARECER TÉCNICO</button>
              <button>REQUISIÇÃO DE MATERIAL</button>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() =>
              setChecklists({ ...checklists, PROCESSOS: !checklists.PROCESSOS })
            }
          >
            PROCESSOS
          </button>
          {checklists.PROCESSOS && (
            <div>
              <button>ESPECIFICAÇÃO TÉNICA</button>
              <button>FLUXOGRAMAS</button>
              <button>LISTA DE LINHAS</button>
              <button>RELATÓRIOS</button>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() =>
              setChecklists({ ...checklists, SEGURANCA: !checklists.SEGURANCA })
            }
          >
            SEGURANCA
          </button>
          {checklists.SEGURANCA && (
            <div>
              <button>CRITÉRIOS DE PROJETO</button>
              <button>ESPECIFICAÇÕES TÉCNICAS</button>
              <button>ESTUDOS</button>
              <button>FOLHAS DE DADOS</button>
              <button>PLANTA DO SISTEMA DE CFTV E SEGURANÇA PAT</button>
              <button>PLANTAS GERAIS</button>
              <button>REQUISIÇÃO DE MATERIAL</button>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() =>
              setChecklists({ ...checklists, TELECOM: !checklists.TELECOM })
            }
          >
            TELECOM
          </button>
          {checklists.TELECOM && (
            <div>
              <button>DESENHOS</button>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() =>
              setChecklists({
                ...checklists,
                TUBULACOES: !checklists.TUBULACOES,
              })
            }
          >
            TUBULACOES
          </button>
          {checklists.TUBULACOES && (
            <div>
              <button>CRITÉRIO DE PROJETO</button>
              <button>DESENHOS</button>
              <button>DESENHOS - PLANTA E PERFIL</button>
              <button>ESPECIFICAÇÃO TÉCNICA</button>
              <button>FOLHAS DE DADOS</button>
              <button>ISOMÉTRICOS</button>
              <button>LAYOUT</button>
              <button>LISTA DE MATERIAIS</button>
              <button>LISTAS DE SUPORTES PARA TUBULAÇÃO</button>
              <button>MEMÓRIA DE CÁLCULO</button>
              <button>PLANTAS DE MACROLOCALIZAÇÃO</button>
              <button>RELATÓRIOS</button>
              <button>REQUISIÇÃO DE MATERIAIS</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuChecklistAddClass;

{
  /* <div className="d-flex">
        <button
          onClick={async () => {
            await BulkAddChecks(
              checklist?.id,
              ClassChecksInstrumentacaoCriterioDeProjeto,
              34
            );
            window.location.reload();
          }}
        >
          Critério de Projeto
        </button>
        <button
          onClick={async () => {
            await BulkAddChecks(checklist?.id, ClassBChecks, 34);
            window.location.reload();
          }}
        >
          ClasseB
        </button>
      </div> */
}
