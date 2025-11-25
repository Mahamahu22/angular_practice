import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemService } from '../../services/item.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']     
})
export class ItemsComponent implements OnInit {

  items: any[] = [];
  name = '';
  amount: any = '';
  editId: number | null = null;

  constructor(private service: ItemService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.service.getItems().subscribe(res => {
      this.items = res;
    });
  }

  addOrUpdate() {
    if (!this.name || !this.amount) return;

    if (this.editId === null) {
      this.service.addItem({ name: this.name, amount: this.amount }).subscribe(() => {
        alert('Added successfully');
        this.loadItems();
        this.reset();
      });
    } else {
      this.service.updateItem(this.editId, { name: this.name, amount: this.amount }).subscribe(() => {
        alert('Updated successfully');
        this.loadItems();
        this.reset();
      });
    }
  }

  edit(item: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: "Are you sure you want to edit?" }
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.name = item.name;
        this.amount = item.amount;
        this.editId = item.id;
      }
    });
  }

  delete(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: "Are you sure you want to delete?" }
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.service.deleteItem(id).subscribe(() => {
          alert('Deleted successfully');
          this.loadItems();
        });
      }
    });
  }

  reset() {
    this.name = '';
    this.amount = '';
    this.editId = null;
  }
}
