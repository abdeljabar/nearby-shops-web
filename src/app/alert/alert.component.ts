import { Component, OnInit } from '@angular/core';
import {AlertService} from "../services/alert.service";
import {AlertType} from "../models/alert.type";
import {Alert} from "../models/alert";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alerts: Alert[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: Alert) => {
      if (!alert) {
        this.alerts = [];
        return;
      }

      this.alerts.push(alert);
    });
  }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }

      switch (alert.type) {
          case AlertType.Success:
              return 'alert alert-success';
          case AlertType.Error:
              return 'alert alert-danger';
          case AlertType.Info:
              return 'alert alert-info';
          case AlertType.Warning:
              return 'alert alert-warning';
      }
  }

}
