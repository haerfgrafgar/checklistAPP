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
  ChecklistClassGeralChecklistQualidadeChecks,
  ChecklistClassInstrumentacaoCriterioDeProjetoChecks,
  ChecklistClassInstrumentacaoDesenhosChecks,
  ChecklistClassInstrumentacaoDiagramaDeInterligacaoChecks,
  ChecklistClassInstrumentacaoFolhaDeDadosChecks,
  ChecklistClassInstrumentacaoListaDeCabosChecks,
  ChecklistClassInstrumentacaoListaDeCargasEletricasChecks,
  ChecklistClassInstrumentacaoListasChecks,
  ChecklistClassInstrumentacaoMemorialDeCalculoChecks,
  ChecklistClassInstrumentacaoRequisicaoDeMateriaisChecks,
  ChecklistClassMecanicaEspecificacaoTecnicaChecks,
  ChecklistClassMecanicaParecerTecnicoChecks,
  ChecklistClassMecanicaRequesicaoDeMaterialChecks,
  ChecklistClassProcessosEspecificacaoTecnicaChecks,
  ChecklistClassProcessosFluxogramasChecks,
  ChecklistClassProcessosListaDeLinhasChecks,
  ChecklistClassProcessosRelatoriosChecks,
  ChecklistClassSegurancaCriteriosDeProjetoChecks,
  ChecklistClassSegurancaEspecificacoesTecnicasChecks,
  ChecklistClassSegurancaEstudosChecks,
  ChecklistClassSegurancaFolhasDeDadosChecks,
  ChecklistClassSegurancaPlantaDoSistemaDeCftvESegurancaPatChecks,
  ChecklistClassSegurancaPlantasGeraisChecks,
  ChecklistClassSegurancaRequisicaoDeMaterialChecks,
  ChecklistClassTelecomDesenhosChecks,
  ChecklistClassTubulacoesCriterioDeProjetoChecks,
  ChecklistClassTubulacoesDesenhosChecks,
  ChecklistClassTubulacoesDesenhosPlantaEPerfilChecks,
  ChecklistClassTubulacoesEspecificacaoTecnicaChecks,
  ChecklistClassTubulacoesFolhasDeDadosChecks,
  ChecklistClassTubulacoesIsometricosChecks,
  ChecklistClassTubulacoesLayoutChecks,
  ChecklistClassTubulacoesListaDeMateriaisChecks,
  ChecklistClassTubulacoesListasDeSuportesParaTubulacaoChecks,
  ChecklistClassTubulacoesMemoriaDeCalculoChecks,
  ChecklistClassTubulacoesPlantasDeMacrolocalizacaoChecks,
  ChecklistClassTubulacoesRelatoriosChecks,
  ChecklistClassTubulacoesRequisicaoDeMateriaisChecks,
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
                GERAL: !checklists.GERAL,
              })
            }
          >
            GERAL
          </button>
          {checklists.GERAL && (
            <div>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassGeralChecklistQualidadeChecks
                  );
                  window.location.reload();
                }}
              >
                CRITÉRIO DE PROJETO
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
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassMecanicaEspecificacaoTecnicaChecks
                  );
                  window.location.reload();
                }}
              >
                ESPECIFICAÇÃO TÉCNICA
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassMecanicaParecerTecnicoChecks
                  );
                  window.location.reload();
                }}
              >
                PARECER TÉCNICO
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassMecanicaRequesicaoDeMaterialChecks
                  );
                  window.location.reload();
                }}
              >
                REQUISIÇÃO DE MATERIAL
              </button>
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
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassProcessosEspecificacaoTecnicaChecks
                  );
                  window.location.reload();
                }}
              >
                ESPECIFICAÇÃO TÉNICA
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassProcessosFluxogramasChecks
                  );
                  window.location.reload();
                }}
              >
                FLUXOGRAMAS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassProcessosListaDeLinhasChecks
                  );
                  window.location.reload();
                }}
              >
                LISTA DE LINHAS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassProcessosRelatoriosChecks
                  );
                  window.location.reload();
                }}
              >
                RELATÓRIOS
              </button>
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
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassSegurancaCriteriosDeProjetoChecks
                  );
                  window.location.reload();
                }}
              >
                CRITÉRIOS DE PROJETO
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassSegurancaEspecificacoesTecnicasChecks
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
                    ChecklistClassSegurancaEstudosChecks
                  );
                  window.location.reload();
                }}
              >
                ESTUDOS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassSegurancaFolhasDeDadosChecks
                  );
                  window.location.reload();
                }}
              >
                FOLHAS DE DADOS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassSegurancaPlantaDoSistemaDeCftvESegurancaPatChecks
                  );
                  window.location.reload();
                }}
              >
                PLANTA DO SISTEMA DE CFTV E SEGURANÇA PAT
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassSegurancaPlantasGeraisChecks
                  );
                  window.location.reload();
                }}
              >
                PLANTAS GERAIS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassSegurancaRequisicaoDeMaterialChecks
                  );
                  window.location.reload();
                }}
              >
                REQUISIÇÃO DE MATERIAL
              </button>
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
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassTelecomDesenhosChecks
                  );
                  window.location.reload();
                }}
              >
                DESENHOS
              </button>
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
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassTubulacoesCriterioDeProjetoChecks
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
                    ChecklistClassTubulacoesDesenhosChecks
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
                    ChecklistClassTubulacoesDesenhosPlantaEPerfilChecks
                  );
                  window.location.reload();
                }}
              >
                DESENHOS - PLANTA E PERFIL
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassTubulacoesEspecificacaoTecnicaChecks
                  );
                  window.location.reload();
                }}
              >
                ESPECIFICAÇÃO TÉCNICA
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassTubulacoesFolhasDeDadosChecks
                  );
                  window.location.reload();
                }}
              >
                FOLHAS DE DADOS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassTubulacoesIsometricosChecks
                  );
                  window.location.reload();
                }}
              >
                ISOMÉTRICOS
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassTubulacoesLayoutChecks
                  );
                  window.location.reload();
                }}
              >
                LAYOUT
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassTubulacoesListaDeMateriaisChecks
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
                    ChecklistClassTubulacoesListasDeSuportesParaTubulacaoChecks
                  );
                  window.location.reload();
                }}
              >
                LISTAS DE SUPORTES PARA TUBULAÇÃO
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassTubulacoesMemoriaDeCalculoChecks
                  );
                  window.location.reload();
                }}
              >
                MEMÓRIA DE CÁLCULO
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassTubulacoesPlantasDeMacrolocalizacaoChecks
                  );
                  window.location.reload();
                }}
              >
                PLANTAS DE MACROLOCALIZAÇÃO
              </button>
              <button
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassTubulacoesRelatoriosChecks
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
                    ChecklistClassTubulacoesRequisicaoDeMateriaisChecks
                  );
                  window.location.reload();
                }}
              >
                REQUISIÇÃO DE MATERIAIS
              </button>
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
