import { ref } from 'vue';

import { azzuleApi, handleApiError } from '@/helpers/azzuleApi';

export const useApp = () => {
    const result = ref<{ ok:  boolean, message: string }>({
        ok: true,
        message: '',
    });
    const questionnaireId = ref<number>();
    const isSysco = ref<boolean>(false);
    const disableButtonSearch = ref<boolean>(false);

    const languageId: string = '3/8PGq2xrxEGNMGzUqmd//[g//]//]'; /* Esto es constante por el momento, siempre los reportes deben salir en inglés */

    const encryptId = async (id: number = 0) => {
        result.value= {
            ok: true,
            message: ''
        }

        disableButtonSearch.value = true;

        try {
            const { data } = await azzuleApi.get(`Encrypt?texto=${ id }`);
            const { Data } = data;
            return Data.NEW;
        } catch (error) {
            result.value = {
                ok: false,
                message: 'Ocurrió un error, intente de nuevo, si el problema persiste contacte con el programador.',
            }
            handleApiError(error);
        }
        finally {
            disableButtonSearch.value = false;
        }
    }

    const redirectToReport = () => {
        if (isSysco.value) {
            window.open(`${ import.meta.env.CT_QUESTIONNAIRETOOL_COMPONENT_URL }/HTML/ReportEIR.html?QuestionnaireID${ questionnaireId.value }&LanguageID=${ languageId }`, '_blank');
            return;
        }
        
        window.open(`${ import.meta.env.CT_QUESTIONNAIRETOOL_COMPONENT_URL }/HTML/Report2.html?QuestionnaireID${ questionnaireId.value }&LanguageID=${ languageId }`, '_blank');
    }

    return {
        disableButtonSearch,
        isSysco,
        questionnaireId,
        result,
        findQuestionnaire: async () => {
            if (questionnaireId.value?.toString().trim().length === 0) return;
            if (questionnaireId.value === 0) return;

            const res = await encryptId(questionnaireId.value);
            redirectToReport();
        },
    }
}