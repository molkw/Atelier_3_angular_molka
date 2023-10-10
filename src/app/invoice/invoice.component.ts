import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../Models/invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  id!: number;
active!: boolean;

invoice?: Invoice;
isActive!: boolean;

constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
  const pathId = this.route.snapshot.paramMap.get('id');
  const pathActive = this.route.snapshot.paramMap.get('active');

  if (pathId) {
    this.id = Number(pathId); // Récupère l'ID de la route et le convertit en nombre
    this.active = pathActive === 'true'; // Récupère l'état "active" de la route et le compare à "true"
  } else {
    this.id = Number(this.route.snapshot.queryParamMap.get('id')); // Récupère l'ID à partir des paramètres de requête
    this.active = this.route.snapshot.queryParamMap.get('active') === 'true'; // Récupère l'état "active" des paramètres de requête
  }

  const mockInvoices: Invoice[] = [ // Crée un tableau de factures simulées (mock)
    {idFacture: 1, montantFacture: 120, montantRemise: 10, dateFacture: "12/12/2021", active: true},
    {idFacture: 2, montantFacture: 1020, montantRemise: 90, dateFacture: "22/11/2020", active: true},
    {idFacture: 3, montantFacture: 260, montantRemise: 30, dateFacture: "18/10/2020", active: false},
    {idFacture: 4, montantFacture: 450, montantRemise: 40, dateFacture: "14/12/2020", active: true},
  ];
  
  this.invoice = mockInvoices.find(invoice => invoice.idFacture === this.id); // Recherche la facture correspondant à l'ID
  this.isActive = this.invoice?.active || false; // Détermine si la facture est active (ou définie à false par défaut si elle est null)
}

  }


