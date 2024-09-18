import React, { useState } from "react";
import { BulkAddChecks } from "../../Helper";
import { ChecklistClassInstrumentacaoCriterioDeProjetoChecks } from "../../Globals";

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
              <button>CRITÉRIOS DE PROJETO</button>
              <button>DESENHOS</button>
              <button>MEMORIAL DE CÁLCULO</button>
              <button>MEMORIAL DESCRITIVO</button>
              <button>RELATÓRIOS</button>
              <button>SONDAGEM</button>
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
              <button>ATERRAMENTO E SPDA</button>
              <button>CRITÉRIO DE PROJETO</button>
              <button>DESENHOS</button>
              <button>DETALHAMENTOS</button>
              <button>DIAGRAMAS</button>
              <button>ESPECIFICAÇÕES TÉCNICAS</button>
              <button>ESTUDOS DE INCIDÊNCIA SOLAR</button>
              <button>LISTA DE CABOS</button>
              <button>LISTA DE CARGAS</button>
              <button>LISTA DE MATERIAIS</button>
              <button>MEMORIAL DE CÁLCULO</button>
              <button>PLANTA DE DISTRIBUIÇÃO DE FORÇA E CONTROLE</button>
              <button>PLANTAS DE ILUMINAÇÃO E TOMADAS</button>
              <button>PROCEDIMENTOS DE MEDIÇÃO</button>
              <button>RELATÓRIOS</button>
              <button>REQUISIÇÕES DE MATERIAL</button>
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
                onClick={() =>
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassInstrumentacaoCriterioDeProjetoChecks
                  )
                }
              >
                CRITÉRIO DE PROJETO
              </button>
              <button>DESENHOS</button>
              <button>DIAGRAMA DE INTERLIGAÇÃO</button>
              <button>FOLHA DE DADOS</button>
              <button>LISTA DE CABOS</button>
              <button>LISTA DE CARGAS ELÉTRICAS</button>
              <button>LISTAS</button>
              <button>MEMORIAL DE CÁLCULO</button>
              <button>REQUISIÇÃO DE MATERIAIS</button>
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
