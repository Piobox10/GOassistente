
import { MedicalProtocol } from './types';

export const MEDICAL_PROTOCOLS: MedicalProtocol[] = [
    {
        key: 'sangramentoPrimeiroTrimestre',
        title: '🩸 Sangramento no 1º Trimestre',
        priority: 'high',
        avaliacao: 'Sangramento no 1º trimestre - Investigar causas (Ameaça de Abortamento, Abortamento Inevitável/Incompleto, Gravidez Ectópica).',
        condutas: [
            'Anamnese detalhada (DUM, sangramento, dor), exame físico (especular, toque vaginal).',
            'Solicitar beta-HCG quantitativo, USG transvaginal.',
            'Ameaça de Abortamento: Repouso relativo e reavaliação.',
            'Abortamento Inevitável/Incompleto: Esvaziamento uterino (AMIU, curetagem ou Misoprostol).',
            'Gravidez Ectópica: Conduta expectante, medicamentosa (Metotrexato) ou cirúrgica.',
            'Prescrição (Dor): Butilbrometo de escopolamina 10mg + Dipirona 500mg.',
            'Prescrição (Abortamento): Misoprostol 800mcg via vaginal.',
            'Prescrição (Ectópica): Metotrexato 50mg/m² IM.'
        ],
        observacoes: 'Sempre excluir gravidez ectópica. Administrar imunoglobulina anti-D em pacientes Rh negativo.'
    },
    {
        key: 'hiperemese',
        title: '🤢 Hiperêmese Gravídica',
        priority: 'medium',
        avaliacao: 'Hiperêmese gravídica com vômitos persistentes, perda de peso > 5% e desidratação.',
        condutas: [
            'Internação se grave.',
            'Jejum inicial, hidratação venosa (Soro Fisiológico 0,9% 1000ml + KCl 10% 20ml, IV).',
            'Correção de eletrólitos.',
            'Suplementação de Tiamina (Vitamina B1) 100mg/dia IV por 3 dias.',
            'Uso de antieméticos (Dimenidrinato, Metoclopramida ou Ondansetrona).'
        ],
        observacoes: 'Realizar USG para descartar gestação múltipla ou mola hidatiforme.'
    },
    {
        key: 'preEclampsia',
        title: '⚡ Pré-eclâmpsia',
        priority: 'high',
        avaliacao: 'Pré-eclâmpsia: Hipertensão (PA ≥ 140/90) após 20 semanas com proteinúria ou disfunção de órgão-alvo.',
        condutas: [
            'Investigar cefaleia, escotomas, dor epigástrica. Aferir PA, avaliar edema e reflexos.',
            'Solicitar avaliação laboratorial: Proteinúria de 24h ou relação proteína/creatinina, Hemograma completo com plaquetas, Função hepática (TGO, TGP, DHL), Função renal (Ureia, Creatinina), Ácido úrico.',
            'Sem Gravidade: Acompanhamento ambulatorial e controle da PA.',
            'Com Gravidade: Internação, controle pressórico, prevenção de eclâmpsia com Sulfato de Magnésio.',
            'Planejamento do parto. Corticoterapia se < 34 semanas.',
            'Crise Hipertensiva: Hidralazina 5mg IV ou Nifedipino 10mg VO.',
            'Prevenção de Eclâmpsia: Sulfato de Magnésio (Ataque: 4g IV; Manutenção: 1-2g/h IV).'
        ],
        observacoes: 'O tratamento definitivo é o parto.'
    },
    {
        key: 'diabeteGestacional',
        title: '🍬 Diabetes Mellitus Gestacional',
        priority: 'medium',
        avaliacao: 'Diabetes Mellitus Gestacional (DMG) diagnosticado por glicemia de jejum ≥ 92 mg/dL ou TOTG 75g alterado.',
        condutas: [
            'Terapia nutricional e atividade física.',
            'Monitorização da glicemia capilar.',
            'Se metas não atingidas, iniciar tratamento medicamentoso (Insulinoterapia).',
            'Vigilância do crescimento fetal.',
            'Insulinoterapia: Esquema basal-bolus com Insulina NPH e Regular/Ultrarrápida.'
        ],
        observacoes: 'O controle glicêmico adequado reduz o risco de macrossomia e outras complicações.'
    },
    {
        key: 'trabalhoPartoPretermo',
        title: '⏰ Trabalho de Parto Prematuro',
        priority: 'high',
        avaliacao: 'Trabalho de Parto Prematuro (TPP) com contrações uterinas regulares e modificação cervical entre 22 e 37 semanas.',
        condutas: [
            'Identificar fatores de risco. Avaliar dinâmica uterina e realizar toque vaginal.',
            'Tocólise (Nifedipino 20mg VO de ataque) para inibir contrações.',
            'Corticoterapia (Betametasona 12mg IM, 2 doses com 24h de intervalo) para maturação pulmonar fetal se < 34s.',
            'Neuroproteção Fetal (Sulfato de Magnésio, Ataque: 4g IV; Manutenção: 1g/h) se < 32s.'
        ],
        observacoes: 'A prematuridade é a principal causa de mortalidade neonatal.'
    },
    {
        key: 'abortamento',
        title: '💔 Abortamento',
        priority: 'medium',
        avaliacao: 'Abortamento (ameaça, inevitável, incompleto, completo, retido, infectado) com base na clínica e USG.',
        condutas: [
            'Depende da classificação: varia de conduta expectante a esvaziamento uterino (AMIU, curetagem ou Misoprostol).',
            'Abortamento Medicamentoso: Misoprostol 800mcg via vaginal.',
            'Aborto Infectado: Iniciar antibioticoterapia (Clindamicina 900mg IV 8/8h + Gentamicina 5mg/kg IV 1x/dia) antes do esvaziamento.'
        ],
        observacoes: 'Acolhimento e aconselhamento contraceptivo são fundamentais.'
    },
    {
        key: 'rpmo',
        title: '💧 Rotura Prematura de Membranas',
        priority: 'high',
        avaliacao: 'Rotura Prematura de Membranas Ovulares (RPMO) confirmada por exame especular estéril.',
        condutas: [
            'A termo (≥ 37s): indução do parto.',
            'Pré-termo (< 34s): conduta expectante hospitalar.',
            'Antibioticoterapia de Latência: Ampicilina IV por 48h + Azitromicina VO, seguido de Amoxicilina VO por 5 dias.',
            'Corticoterapia: Betametasona 12mg IM (2 doses).',
            'Neuroproteção, se indicado.'
        ],
        observacoes: 'Corioamnionite é a principal complicação e indica interrupção da gestação. Evitar toques vaginais.'
    },
    {
        key: 'itu',
        title: '🦠 Infecção do Trato Urinário (ITU)',
        priority: 'low',
        avaliacao: 'Infecção do Trato Urinário (Bacteriúria assintomática, Cistite ou Pielonefrite).',
        condutas: [
            'Tratar sempre, mesmo que assintomática.',
            'Bacteriúria/Cistite: Cefalexina 500mg VO 6/6h por 7 dias.',
            'Pielonefrite: internação e ATB venoso (Ceftriaxona 1-2g IV 24/24h).',
            'Realizar controle de cura.'
        ],
        observacoes: 'Toda gestante deve ser rastreada com urocultura no 1º trimestre.'
    },
    {
        key: 'rcf',
        title: '📉 Restrição de Crescimento Fetal (RCF)',
        priority: 'medium',
        avaliacao: 'Restrição de Crescimento Fetal (RCF) com peso fetal estimado < percentil 10 na USG.',
        condutas: [
            'Vigilância fetal intensiva com USG seriado, Doppler e cardiotocografia.',
            'Prevenção em alto risco: AAS 100-150mg/dia, iniciado antes de 16 semanas.',
            'O momento do parto depende da gravidade e da deterioração do bem-estar fetal.'
        ],
        observacoes: 'Balancear os riscos da prematuridade com os riscos de um ambiente intrauterino hostil.'
    },
    {
        key: 'dhpn',
        title: '🩸 Doença Hemolítica Perinatal (DHPN)',
        priority: 'medium',
        avaliacao: 'Doença Hemolítica Perinatal (DHPN) em gestante Rh negativo com Coombs Indireto positivo.',
        condutas: [
            'Profilaxia com Imunoglobulina Anti-D 300 mcg IM (com 28s e após o parto, se RN Rh+) em gestantes Rh negativo não sensibilizadas.',
            'Em sensibilizadas, monitoramento com Doppler da artéria cerebral média (ACM) e, se necessário, transfusão intrauterina.'
        ],
        observacoes: 'A profilaxia reduziu drasticamente a incidência da doença.'
    },
    {
        key: 'posDatismo',
        title: '⏳ Gravidez Prolongada (Pós-datismo)',
        priority: 'medium',
        avaliacao: 'Gravidez Prolongada (Pós-datismo) com gestação ≥ 42 semanas.',
        condutas: [
            'A partir de 41 semanas, iniciar vigilância do bem-estar fetal.',
            'Indução do parto entre 41 e 42 semanas.',
            'Indução: Misoprostol 25 mcg vaginal (colo desfavorável) ou Ocitocina IV (colo favorável).'
        ],
        observacoes: 'Risco aumentado de insuficiência placentária e óbito fetal.'
    },
    {
        key: 'hac',
        title: '🩺 Hipertensão Arterial Crônica (HAC)',
        priority: 'medium',
        avaliacao: 'Hipertensão Arterial Crônica (HAC) com PA ≥ 140/90 mmHg antes da gestação ou de 20 semanas.',
        condutas: [
            'Ajustar medicação anti-hipertensiva (Metildopa, Nifedipino, Hidralazina).',
            'Profilaxia de pré-eclâmpsia com AAS.',
            'Vigilância fetal rigorosa.'
        ],
        observacoes: 'Alto risco de desenvolver pré-eclâmpsia sobreposta.'
    },
    {
        key: 'hellp',
        title: '🔥 Síndrome HELLP',
        priority: 'high',
        avaliacao: 'Síndrome HELLP (Hemólise, Enzimas hepáticas elevadas, Plaquetopenia).',
        condutas: [
            'Emergência obstétrica. Estabilização materna.',
            'Controle da PA.',
            'Prevenção de convulsões com Sulfato de Magnésio.',
            'Correção da plaquetopenia (transfusão de plaquetas se indicado).',
            'Interrupção imediata da gestação.'
        ],
        observacoes: 'Alta morbimortalidade. O tratamento definitivo é a resolução da gravidez.'
    },
    {
        key: 'eclampsia',
        title: '🧠 Eclâmpsia',
        priority: 'high',
        avaliacao: 'Eclâmpsia: Convulsão tônico-clônica em paciente com pré-eclâmpsia.',
        condutas: [
            'Conduta imediata: Proteger a paciente, garantir via aérea e iniciar tratamento.',
            'Sulfato de Magnésio (Ataque 4-6g IV; Manutenção 1-2g/h) para tratar a crise e prevenir recorrência.',
            'Controle da hipertensão grave (Hidralazina IV).',
            'Interrupção da gestação após estabilização materna.'
        ],
        observacoes: 'Emergência médica. Monitorar sinais de intoxicação por sulfato (antídoto: Gluconato de Cálcio).'
    },
    {
        key: 'dpp',
        title: '🚨 Descolamento Prematuro de Placenta (DPP)',
        priority: 'high',
        avaliacao: 'Descolamento Prematuro de Placenta (DPP) com tríade clássica: sangramento vaginal escuro, dor abdominal súbita, hipertonia uterina.',
        condutas: [
            'Emergência. Feto vivo com sofrimento: cesárea imediata.',
            'Feto morto: parto vaginal se mãe estável.',
            'Medidas de suporte (hidratação, reserva de sangue).'
        ],
        observacoes: 'Risco elevado de CIVD e óbito perinatal. Diagnóstico é clínico.'
    },
    {
        key: 'placentaPrevia',
        title: '🩹 Placenta Prévia',
        priority: 'high',
        avaliacao: 'Placenta Prévia: Sangramento vaginal indolor, vermelho vivo, de início súbito. Diagnóstico por USG.',
        condutas: [
            'TOQUE VAGINAL CONTRAINDICADO.',
            'Sangramento leve em pré-termo: conduta expectante hospitalar.',
            'Sangramento intenso ou gestação a termo: cesárea.',
            'Corticoterapia se < 34s e risco de parto.'
        ],
        observacoes: 'Pesquisar acretismo placentário, especialmente com cesárea anterior.'
    },
    {
        key: 'sofrimentoFetalAgudo',
        title: '😥 Sofrimento Fetal Agudo',
        priority: 'high',
        avaliacao: 'Sofrimento Fetal Agudo com padrão anormal na cardiotocografia (bradicardia, desacelerações tardias).',
        condutas: [
            'Identificar a causa base (DPP, hipotensão materna).',
            'Manobras de ressuscitação intrauterina (decúbito lateral esquerdo, O2 8-10 L/min, hidratação IV, suspender ocitocina).',
            'Se não houver melhora, parto imediato pela via mais rápida.'
        ],
        observacoes: 'O termo "estado fetal não tranquilizador" é mais adequado.'
    },
    {
        key: 'dtg',
        title: '🍇 Doença Trofoblástica Gestacional (DTG)',
        priority: 'medium',
        avaliacao: "Doença Trofoblástica Gestacional (DTG) com sangramento no 1º trimestre, útero maior, beta-hCG >100.000, USG com 'flocos de neve'.",
        condutas: [
            'Esvaziamento uterino por vácuo-aspiração.',
            'Seguimento com dosagem seriada de beta-hCG por 6 meses para detectar doença persistente (NTG).',
            'Contracepção hormonal eficaz durante o seguimento.'
        ],
        observacoes: 'Encaminhar para centro de referência. A NTG tem altas taxas de cura com quimioterapia.'
    },
    {
        key: 'trombofilias',
        title: '🧬 Trombofilias e Gestação',
        priority: 'medium',
        avaliacao: 'Trombofilias com história pessoal/familiar de trombose, perdas gestacionais de repetição.',
        condutas: [
            'Tromboprofilaxia com Heparina de Baixo Peso Molecular (HBPM) em pacientes de alto risco.',
            'Profilaxia: Enoxaparina 40mg SC, 1x/dia.',
            'Terapêutica: Enoxaparina 1mg/kg SC, 12/12h.'
        ],
        observacoes: 'O manejo da anticoagulação no periparto é crucial. Diagnóstico com pesquisa laboratorial.'
    },
    {
        key: 'hpp',
        title: '🩸 Hemorragia Pós-Parto (HPP)',
        priority: 'high',
        avaliacao: "Hemorragia Pós-Parto (HPP) com perda sanguínea > 500mL (vaginal) ou > 1000mL (cesárea). Investigar os 4 'T's: Tônus, Trauma, Tecido, Trombo.",
        condutas: [
            'Abordagem sequencial: pedir ajuda, massagem uterina bimanual.',
            'Drogas uterotônicas (Ocitocina IV, Metilergometrina IM, Misoprostol retal).',
            'Antifibrinolítico: Ácido Tranexâmico 1g IV.',
            'Tamponamento com balão e, se refratário, cirurgia (sutura de B-Lynch, histerectomia).'
        ],
        observacoes: 'Principal causa de mortalidade materna. O manejo ativo do 3º período previne a HPP.'
    },
    {
        key: 'riscoHabitual',
        title: '✅ Acompanhamento de Risco Habitual',
        priority: 'low',
        avaliacao: 'Gestação de risco habitual, com captação precoce e reavaliação contínua do risco.',
        condutas: [
            'Calendário de Consultas: Mensal até 28s; quinzenal até 36s; semanal até o parto (mínimo de 6 consultas).',
            '1º Trimestre: Tipagem/Rh, Coombs, Hemograma, Glicemia, Sorologias (Sífilis, HIV, Hep B, Toxo), Urina I, Urocultura, USG, Ácido fólico.',
            '2º Trimestre: TOTG 75g (24-28s). Repetir sorologias. USG morfológica.',
            '3º Trimestre: Repetir sorologias e hemograma. Pesquisa de GBS (35-37s).'
        ],
        observacoes: 'É a base para a saúde materno-infantil. Identificar e encaminhar gestantes que evoluem para alto risco.'
    },
    {
        key: 'altoRisco',
        title: '⚠️ Acompanhamento de Alto Risco',
        priority: 'high',
        avaliacao: 'Gestação de alto risco, definida por doença materna ou condição que aumenta o risco. Requer abordagem multidisciplinar.',
        condutas: [
            'Consultas mais frequentes e individualizadas.',
            'Vigilância do bem-estar fetal intensificada (CTG, PBF, Doppler).',
            'Planejamento do parto complexo.',
            'Exames para monitorar a doença de base. Ajuste de medicações.',
            'Uso profilático de AAS e/ou HBPM conforme o caso. Corticoterapia se risco de parto prematuro.'
        ],
        observacoes: 'Deve ser realizado em serviço terciário com recursos para o manejo de complicações.'
    }
];