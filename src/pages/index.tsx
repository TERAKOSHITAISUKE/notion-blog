import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>Welcome my notion blog!</h2>
      <p>I offer web3, DAO, ETH</p>
      <p>Have fun!</p>
      <p>
        powered by{' '}
        <ExtLink href="https://github.com/TERAKOSHITAISUKE/notion-blog">
          tera
        </ExtLink>
      </p>
    </div>
  </div>
)

export default RenderPage
