import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { DespesaComponent } from './despesa/despesa.component';
import { AplicacaoComponent } from './aplicacao/aplicacao.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ReceitaComponent } from './receita/receita.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

export const appRoutes: Routes = [
    {
        path: 'app',
        component: AplicacaoComponent,
        children: [
            {
                path: 'receitas',
                component: ReceitaComponent
            },
            {
                path: 'despesas',
                component: DespesaComponent
            },
            {
                path: 'movimentacoes',
                component: MovimentacaoComponent
            },
            {
                path: 'dashboards',
                component: RelatorioComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'cadastro-usuario',
        component: CadastroUsuarioComponent,
    },

    {path: '**', redirectTo: '/login'},  
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);
