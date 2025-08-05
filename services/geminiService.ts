import { AnamnesisFormData } from '../types';

function formatarLinhasEmBarras(texto: string): string {
    if (!texto) return '';
    return texto.split('\n')
               .map(linha => linha.trim())
               .filter(linha => linha !== '')
               .join('/');
}

function formatarData(data: string): string {
    if (!data || !data.includes('-')) return data;
    const [year, month, day] = data.split('-');
    return `${day}/${month}/${year}`;
}

export const generateAnamnesisFromData = (data: AnamnesisFormData): string => {
    
    const intercorrenciasFormatadas = data.intercorrencias 
        ? data.intercorrencias.split('\n').map(linha => `- ${linha.trim()}`).filter(linha => linha !== '- ').join('\n') 
        : '- Nega intercorrências prévias.';
    
    const comorbidadesFormatadas = formatarLinhasEmBarras(data.comorbidades) || 'Nega';
    const medicacoesFormatadas = formatarLinhasEmBarras(data.medicacoes) || 'Nega';

    let igInfo = `#IG ${data.ig || '[IG NÃO INFORMADA]'}`;
    if (data.ig_metodo === 'DUM' && data.data_dum) {
        igInfo += ` - DUM: ${formatarData(data.data_dum)}`;
    } else if (data.ig_metodo === 'USG' && data.data_usg) {
        igInfo += ` - USG: ${formatarData(data.data_usg)}`;
        if (data.ig_usg) {
            igInfo += ` (${data.ig_usg})`;
        }
    }

    const estadoGeral = [data.beg || 'BEG', data.loc || 'LOC', data.muc || 'MUC'].join(' ');
    
    let sinaisVitais = `PA ${data.pa_sistolica || 'XX'}x${data.pa_diastolica || 'XX'}mmHg`;
    if (data.fc) sinaisVitais += ` / FC: ${data.fc} bpm`;
    if (data.fr) sinaisVitais += ` / FR: ${data.fr} irpm`;
    if (data.sato2) sinaisVitais += ` / SatO2: ${data.sato2}%`;
    if (data.tax) sinaisVitais += ` / Tax: ${data.tax}°C`;
    if (data.hgt) sinaisVitais += ` / HGT: ${data.hgt} mg/dL`;
    
    const objetivoItems: string[] = [];
    if (data.objetivo_custom) objetivoItems.push(data.objetivo_custom);
    objetivoItems.push(estadoGeral, sinaisVitais);
    if (data.bcf) objetivoItems.push(`BCF: ${data.bcf} bpm`);
    if (data.tu) objetivoItems.push(`TU: ${data.tu}`);
    if (data.du) objetivoItems.push(`DU: ${data.du}`);
    if (data.tv) objetivoItems.push(`TV: ${data.tv}`);
    if (data.ee) objetivoItems.push(`EE: ${data.ee}`);
    if (data.exame_abdominal) objetivoItems.push(`Exame Abdominal: ${data.exame_abdominal}`);
    if (data.exame_mmii) objetivoItems.push(`Exame MMII: ${data.exame_mmii}`);
    
    const objetivoSecao = objetivoItems.join('\n');
    
    const anamneseTemplate = `MODELO DE ANAMNESE OBSTÉTRICA

DADOS DA PACIENTE

#G${data.gestacoes || '0'}N${(data.partos || '0').padStart(2, '0')}C${data.cesareas || '0'}A${data.abortos || '0'}
${intercorrenciasFormatadas}

${igInfo}

#TS ${data.ts || '[TS NÃO INFORMADO]'}

#COMORBIDADES: ${comorbidadesFormatadas}

#MUC: ${medicacoesFormatadas}

#ALERGIAS: ${data.alergias || 'Nega'}

#TOXOPLASMOSE: ${data.toxoplasmose || 'DESCONHECIDO'}

#SOROLOGIAS: ${data.sorologias || 'NR'}

#GBS: ${data.gbs || 'NÃO REALIZADA'}

#ETILISMO/TABAGISMO/OUTROS VÍCIOS: ${data.vicios || 'Nega'}

S
${data.subjetivo || '[QUEIXA NÃO INFORMADA]'}

O
${objetivoSecao}

A
${data.avaliacao || '[AVALIAÇÃO NÃO INFORMADA]'}

P
${data.plano || '[PLANO NÃO INFORMADO]'}

ACADÊMICO: ${data.academico || '[ACADÊMICO NÃO INFORMADO]'}
SUPERVISIONADO PELA: ${data.supervisor || '[SUPERVISOR NÃO INFORMADO]'}`;

    return anamneseTemplate;
};
