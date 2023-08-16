import { Component } from '@angular/core';
import { PlantData } from 'src/app/repository/types/plant-data';
import { ApiService } from 'src/app/services/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  frontendData : PlantData = {
    name: 'aloe'
  }

  plant: PlantData = this.frontendData;

  resetData() {
    this.plant = this.frontendData
  }

  constructor(private apiService: ApiService) {}

  fetchDataAndSave(): void {
    this.apiService.fetchData().subscribe(response => {
      // Save retrieved data in the service
      this.plant = response;
    });
  };



  plantInput: string | undefined;

  plantList: string[] = [];

  addPlant() {
    if(this.plantInput){
      this.plantList.push(this.plantInput)
      this.plantInput = undefined;
    }
  }
  clearPlantList() {
    this.plantList = [];
  }
}
