import { Button, CustomLink, Input, Logo, Text } from "@/shared/ui"
import './Footer.css'
import { useState, type SubmitEvent } from "react"

export const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)

  const handleSubscribeSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    // api request

    setIsSubmited(true)
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top__left">
          <Logo />
          <Text color="foreground" size="big">
            Производительность без излишеств.
            Снаряжение для повседневных занятий.
          </Text>
        </div>
        <div className="footer-top__nav-column">
          <h5>ПОДДЕРЖКА</h5>
          <CustomLink to='/'>Доставка и возврат</CustomLink>
          <CustomLink to='/'>Таблица размеров</CustomLink>
          <CustomLink to='/'>Инструкции по уходу</CustomLink>
          <CustomLink to='/'>Связаться с нами</CustomLink>
        </div>
        <div className="footer-top__nav-column">
          <h5>О НАС</h5>
          <CustomLink to='/'>Наш подход</CustomLink>
          <CustomLink to='/'>Материалы</CustomLink>
          <CustomLink to='https://vk.ru' target="_blank">Сообщество</CustomLink>
        </div>
        <div className="footer-top__subscribe">
          <h5>Оставайся в движении</h5>
          <Text color="foreground" size="default">Новая одежда. Свежий взгляд.</Text>
          <form className="subscribe-form" onSubmit={handleSubscribeSubmit}>
            <Input
              id="subscribe-email-input"
              type="email"
              placeholder="Ваш email"
              value={email}
              disabled={isSubmited}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {isSubmited ?
              <Text color="accent" size="big" className="submit-success">✓</Text>
              :
              <Button
                variant="primary"
                id='subscribe-email-button'
                type="submit"
                onClick={() => { }}
              >
                Следить
              </Button>

            }

          </form>
          <Text color="foreground" size="mini">Следите за новостями. Нажимая “Следить” вы соглашаетесь на нашу политику конфиденциальности</Text>
        </div>
      </div>

      <div className="footer-bottom">
        <Text color="foreground" size="mini">© 2026 Abibas. Все права защищены.</Text>
        <CustomLink to="/policy" color="foreground" size="mini">Политика конфиденциальности</CustomLink>
      </div>
    </footer>
  )
}