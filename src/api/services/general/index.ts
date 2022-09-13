import { trackPromise } from "react-promise-tracker";
import useProviders from "../../providers";

const useGeneralServices = () => {
    const { useGeneralProviders } = useProviders();
    const { getLevels, setLevels } = useGeneralProviders();

    const getLevelsService = () : Promise<any> => {
        return new Promise<any>(async(resolve, reject) => {
            try {
                resolve(await trackPromise(getLevels()))
            } catch (error) {
                reject(error);
            }
        })
    } 

    //Servicio para ejecutar la promesa de guardar nivel
    const setLevelsService = (levelId: number) : Promise<any> => {
        return new Promise<any>(async(resolve, reject) => {
            try {
                resolve(await trackPromise(setLevels(levelId)))
            } catch (error) {
                reject(error);
            }
        })
    } 

    return {
        getLevelsService,
        setLevelsService
    }
};

export default useGeneralServices;
