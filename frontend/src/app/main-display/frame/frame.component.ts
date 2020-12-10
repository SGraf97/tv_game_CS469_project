import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs/operators';
import { SocketsService } from 'src/app/services';
import { APIService } from 'src/app/services/API.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  @ViewChild('screenshot', { static: true }) screen: any;

  id: any;
  link: any;
  constructor(private captureService: NgxCaptureService, private socketService: SocketsService, private apiService: APIService) { }

  ngOnInit(): void {

    this.id = 'tgbNymZ7vqY';
    this.link = 'youtube.com/embed/';
    this.link += this.id;

    // this.source = '\"https://www.youtube.com/embed/3EB13m5Ng9c\";
    this.socketService.syncAllMessages().subscribe(
      msg => {
        if (msg.event === 'create') {//when a "create" event occurs
          let tmpCaptures: any;
          this.apiService.getAllfrom("capture").then(//get all capture events
            res => {
              tmpCaptures = res;
              for (let capture of tmpCaptures) {
                if (!capture.captureURL) { //if capture url in event is null
                  //capture screen
                  this.captureService.getImage(this.screen.nativeElement, true)
                    .pipe(
                      tap(img => {
                        console.log(img);
                        this.apiService.update("capture/"+capture._id, {captureURL: img });
                      })
                    ).subscribe();
                    break;
                }
              }
            }
          )
        }
      }
    )

  }

}
