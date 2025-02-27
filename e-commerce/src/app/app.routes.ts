import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'shop',
    loadComponent: () =>
      import('./shop/shop.component').then((m) => m.ShopComponent),
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./whishlist/whishlist.component').then(
        (m) => m.WhishlistComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'account',
    loadComponent: () =>
      import('./account/account.component').then((m) => m.AccountComponent),
  },
];
