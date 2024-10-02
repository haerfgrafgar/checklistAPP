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
      <div className="d-flex justify-content-center">
        <div className="mb-3">
          <button
            className={`btn btn-${
              checklists.CIVIL ? "secondary" : "primary"
            } me-2`}
            onClick={() =>
              setChecklists({ ...checklists, CIVIL: !checklists.CIVIL })
            }
          >
            CIVIL
          </button>

          {checklists.CIVIL && (
            <div className="btn-group-vertical mt-2">
              <button
                className="btn btn-outline-primary"
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
              <button className="btn btn-outline-primary">DESENHOS</button>
              <button
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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

        <div className="mb-3">
          <button
            className={`btn btn-${
              checklists.ELETRICA ? "secondary" : "primary"
            } me-2`}
            onClick={() =>
              setChecklists({ ...checklists, ELETRICA: !checklists.ELETRICA })
            }
          >
            ELETRICA
          </button>

          {checklists.ELETRICA && (
            <div className="btn-group-vertical mt-2">
              <button
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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

        <div className="mb-3">
          <button
            className={`btn btn-${
              checklists.GERAL ? "secondary" : "primary"
            } me-2`}
            onClick={() =>
              setChecklists({ ...checklists, GERAL: !checklists.GERAL })
            }
          >
            GERAL
          </button>

          {checklists.GERAL && (
            <div className="btn-group-vertical mt-2">
              <button
                className="btn btn-outline-primary"
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

        <div className="mb-3">
          <button
            className={`btn btn-${
              checklists.INSTRUMENTACAO ? "secondary" : "primary"
            } me-2`}
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
            <div className="btn-group-vertical mt-2">
              <button
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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

        <div className="mb-3">
          <button
            className={`btn btn-${
              checklists.MECANICA ? "secondary" : "primary"
            } me-2`}
            onClick={() =>
              setChecklists({ ...checklists, MECANICA: !checklists.MECANICA })
            }
          >
            MECANICA
          </button>

          {checklists.MECANICA && (
            <div className="btn-group-vertical mt-2">
              <button
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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

        <div className="mb-3">
          <button
            className={`btn btn-${
              checklists.PROCESSOS ? "secondary" : "primary"
            } me-2`}
            onClick={() =>
              setChecklists({ ...checklists, PROCESSOS: !checklists.PROCESSOS })
            }
          >
            PROCESSOS
          </button>

          {checklists.PROCESSOS && (
            <div className="btn-group-vertical mt-2">
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  BulkAddChecks(
                    checklistId,
                    ChecklistClassProcessosEspecificacaoTecnicaChecks
                  );
                  window.location.reload();
                }}
              >
                ESPECIFICAÇÃO TÉCNICA
              </button>
              <button
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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

        <div className="mb-3">
          <button
            className={`btn btn-${
              checklists.SEGURANCA ? "secondary" : "primary"
            } me-2`}
            onClick={() =>
              setChecklists({ ...checklists, SEGURANCA: !checklists.SEGURANCA })
            }
          >
            SEGURANCA
          </button>

          {checklists.SEGURANCA && (
            <div className="btn-group-vertical mt-2">
              <button
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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

        <div className="mb-3">
          <button
            className={`btn btn-${
              checklists.TELECOM ? "secondary" : "primary"
            } me-2`}
            onClick={() =>
              setChecklists({ ...checklists, TELECOM: !checklists.TELECOM })
            }
          >
            TELECOM
          </button>

          {checklists.TELECOM && (
            <div className="btn-group-vertical mt-2">
              <button
                className="btn btn-outline-primary"
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

        <div className="mb-3">
          <button
            className={`btn btn-${
              checklists.TUBULACOES ? "secondary" : "primary"
            } me-2`}
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
            <div className="btn-group-vertical mt-2">
              <button
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
                className="btn btn-outline-primary"
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
