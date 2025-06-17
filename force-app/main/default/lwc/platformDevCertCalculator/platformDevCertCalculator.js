import { LightningElement } from "lwc";
const devFundWeight = 0.23;
const processAutoWeight = 0.30;
const userIntWeight = 0.25;
const testDebugWeight = 0.22;
const passingScore = 65;


export default class PlatformDevCertCalculator extends LightningElement {

    devFundamentalScore = 50;
    processAutomationScore = 50;
    userInterfaceScore = 50;
    testingScore = 50;

    certificationScore = 90;

    showResources = false;
    showGoodJob = false; 

    calculateScore(){
        let devFundWeightScore = this.devFundamentalScore * devFundWeight;
        let processAutoWeightScore = this.processAutomationScore * processAutoWeight;
        let userIntWeighScore = this.userInterfaceScore * userIntWeight;
        let testDebugWeightScore = this.testingScore * testDebugWeight;
       
        this.certificationScore = 
            devFundWeightScore + 
            processAutoWeightScore  +
            userIntWeighScore  + 
            testDebugWeightScore;

            this.showResourcesIfFailed();
        }
        handleChange(event){
            console.log(event.target.name, event.target.value);
            console.log(event.target.type)
            console.log(event.target.label);
            const inputName = event.target.name;
            let value = Number(event.target.value);
            if (inputName === 'devFundamentals'){
                this.devFundamentalScore = value;
            }else if (inputName === 'processAuto'){
                this.processAutomationScore = value;
            }else if (inputName === 'userInterface'){
                this.userInterfaceScore = value;
            }else if (inputName === 'testDebugDeploy'){
                this.testingScore = value;
            }
            
        }
        showResourcesIfFailed(){
            if (this.certificationScore < passingScore){
                this.showResources = true;
                this.showGoodJob = false;
            } else {
                this.showResources = false;
                this.showGoodJob = true;
            }
            
            }
        }
