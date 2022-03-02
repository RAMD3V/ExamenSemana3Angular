import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModeloUni } from 'src/app/interface/modelo-uni';
import { ApiseriviceService } from 'src/app/service/apiserivice.service';
import { from, of } from 'rxjs';
import { filter,map } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  universidades:String[]=[];
  guardp:ModeloUni[]=[];
  newUni:String[]=[];
  argentina="argentina";
  formulariUni=this.formapi.group({
    pais:""
  })
  busc: string ='';
  infobusc:any[] = [];
  
  constructor(private apiu:ApiseriviceService, private formapi:FormBuilder) { }
 

  buscarUp() {
    console.log(this.busc);
    
    this.apiu.getUniPais(this.busc).subscribe((res: any) =>{
    console.log(res);
    this.infobusc = res;
  })

  }

  ngOnInit(): void {



  /*
let UnisEnB=of(this.universidades).pipe(
  filter((uni:any)=>uni=='"country": "India"')
);
console.log(UnisEnB);



      this.newUni=this.universidades.filter((unipais:any)=>{
     unipais.includes("India"); 
     return console.log(unipais);     
  });
  */



  
}

}
