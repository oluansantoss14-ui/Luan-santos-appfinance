import './globals.css';

const transactions = [
  { icon: '🍔', name: 'iFood', category: 'Alimentação', date: 'Hoje, 12:30', amount: '- R$ 45,90', className: 'expense' },
  { icon: '💰', name: 'Salário', category: 'Receita', date: 'Hoje, 09:00', amount: '+ R$ 5.800,00', className: 'income' },
  { icon: '🛒', name: 'Mercado', category: 'Compras', date: 'Ontem', amount: '- R$ 284,60', className: 'expense' },
  { icon: '🚗', name: 'Uber', category: 'Transporte', date: '15 Out', amount: '- R$ 32,40', className: 'expense' }
];

const budget = [
  { name: 'Moradia', value: 'R$ 1.450', percent: 72, color: '#5865e9' },
  { name: 'Alimentação', value: 'R$ 880', percent: 88, color: '#ffad62' },
  { name: 'Transporte', value: 'R$ 460', percent: 46, color: '#52c7a5' }
];

export default function Home() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark">$</div><span>Finora</span></div>
        <nav>
          <button className="nav-item active"><span>▦</span> Visão geral</button>
          <button className="nav-item"><span>↔</span> Transações</button>
          <button className="nav-item"><span>◫</span> Orçamentos</button>
          <button className="nav-item"><span>◎</span> Metas</button>
          <button className="nav-item"><span>◈</span> Investimentos</button>
        </nav>
        <div className="sidebar-bottom">
          <button className="nav-item"><span>⚙</span> Configurações</button>
          <div className="profile"><div className="avatar">LS</div><div><b>Luan Santos</b><small>luan@email.com</small></div></div>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div><p className="eyebrow">TERÇA-FEIRA, 17 DE NOVEMBRO</p><h1>Boa tarde, Luan</h1></div>
          <div className="actions"><button className="icon-button">◉</button><button className="add-button">＋ Nova transação</button></div>
        </header>

        <div className="summary-grid">
          <article className="card balance-card"><p>Saldo total</p><h2>R$ 18.240,50</h2><small>↗ 8,2% este mês</small></article>
          <article className="card"><div className="card-title"><p>Receitas</p><span className="trend good">↗</span></div><h2>R$ 5.800,00</h2><small className="muted">Novembro</small></article>
          <article className="card"><div className="card-title"><p>Despesas</p><span className="trend bad">↘</span></div><h2>R$ 3.420,80</h2><small className="muted">Novembro</small></article>
        </div>

        <div className="main-grid">
          <article className="card chart-card">
            <div className="card-heading"><div><p>Fluxo de caixa</p><h3>Últimos 6 meses</h3></div><button className="period">6 meses⌄</button></div>
            <div className="chart">
              <div className="y-labels"><span>8k</span><span>6k</span><span>4k</span><span>2k</span><span>0</span></div>
              <div className="plot">
                <div className="gridlines"><i/><i/><i/><i/><i/></div>
                <svg viewBox="0 0 600 210" preserveAspectRatio="none"><path className="area" d="M0,170 C40,150 70,162 100,135 C140,100 170,125 200,115 C240,100 270,70 300,88 C340,110 370,75 400,82 C440,90 470,55 500,65 C545,75 570,35 600,45 L600,210 L0,210 Z"/><polyline className="line" points="0,170 100,135 200,115 300,88 400,82 500,65 600,45"/><circle cx="500" cy="65" r="6"/><circle cx="600" cy="45" r="6"/></svg>
              </div>
              <div className="x-labels"><span>Jun</span><span>Jul</span><span>Ago</span><span>Set</span><span>Out</span><span>Nov</span></div>
            </div>
          </article>

          <article className="card insight-card"><div className="insight-icon">✦</div><div><p className="insight-label">INSIGHT DO MÊS</p><h3>Você economizou 18% mais</h3><p>Você gastou menos em alimentação do que no mês passado.</p><button>Ver análise →</button></div></article>
        </div>

        <div className="bottom-grid">
          <article className="card transactions-card"><div className="card-heading"><h3>Últimas transações</h3><button className="text-button">Ver todas</button></div>{transactions.map((item) => <div className="transaction" key={item.name}><div className="transaction-icon">{item.icon}</div><div className="transaction-info"><b>{item.name}</b><small>{item.category} · {item.date}</small></div><strong className={item.className}>{item.amount}</strong></div>)}</article>
          <article className="card budget-card"><div className="card-heading"><h3>Orçamento mensal</h3><button className="text-button">Gerenciar</button></div>{budget.map((item) => <div className="budget-row" key={item.name}><div><b>{item.name}</b><small>{item.value} de R$ 1.500</small></div><div className="progress"><i style={{width: `${item.percent}%`, background: item.color}}/></div></div>)}</article>
        </div>
      </section>
    </main>
  );
}
