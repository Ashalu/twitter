import { Component,OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Twitter';
  searchquery = '';
  tweetsdata;
  throttle = 300;
  finished = 'false'
  scrollDistance = 1;
  pieChartData:number[];
  public lineChartData;
  lineChartLabels:Array<any> = ['First','Second','Third','Fourth'];
  public lineChartType:string = 'line';
  constructor(private http: Http){}
  ngOnInit() {
    this.makecall();
}
  makecall(){
    var headers = new Headers();
    headers.append('Content-Type','application/X-www-form-urlencoded');
    this.http.post('http://localhost:3000/authorize',{headers: headers}).subscribe((res) =>{
      console.log(res)
    })

  }

  onScroll() {
    console.log('scrolled!!');
  }
  
  searchcall(){
    console.log("6666")
    var headers = new Headers();
    var searchterm = 'query=' + this.searchquery;
    headers.append('Content-Type','application/X-www-form-urlencoded');
    this.http.post('http://localhost:3000/search',searchterm,{headers: headers}).subscribe((res)=>{
      this.tweetsdata = res.json().data.statuses;
      // this.finished = 'true'
      // console.log(this.tweetsdata);
      // this.lineChartData = [this.tweetsdata.created_at];
    });
  }
}
