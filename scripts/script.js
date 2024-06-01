let textPL = [`<h1>Poradnik Markdown</h1>
<hr>
<em><p>Ta strona jest stroną główną dla poradników o Markdown. Zawiera on podstawowe zagadnienia z tego języka znaczników, między innymi nagłówki, obrazy, linki, listy i wiele innych wraz z przykładami.</p></em>
<hr>
<h2 id="p1">Co to jest Markdown?</h2>
    <p>
        <span class="bold">Markdown</span> jest językiem znaczników typu open-source, stworzonym przez Johna Grubera. Zawiera on zwykły tekst, który jest formatowany przy użyciu określonej składni, która następnie jest przekształcana w HTML.
    </p>
    <p>Pomaga użytkownikom pisać niesformatowany tekst, a następnie przekształcić go w wiele formatów, np <span class="bold">HTML</span>, <span class="bold">pdf</span> lub inne.</p>
<h2 id="p2">Rozszerzenie plików Markdown</h2>
    <p>Nie ma oficjalnego rozszerzenia dla plików tego typu.</p>
    <p>Możesz stworzyć niesformatowany tekst z rozszerzeniem <span class="bold">.md</span>.</p>
    <p>Istnieje jednak wiele innych rozszerzeń dla plików Markdown:</p>
    <ul>
        <li>.markdown</li>
        <li>.md</li>
        <li>.mkd</li>
        <li>.mkdown</li>
        <li>.mdown</li>
        <li>.text</li>
    </ul>
    <p>Niektórzy używają rozszerzenia HTML.</p>
    <p>Github używa <span class="bold">.md</span> jako standardowego rozszerzenia.</p>
<h2 id="p3">Zalety</h2>
    <ul>
        <li>Łatwo jest czytać i pisać tekst, który konwertuje się na dokument typu HTML.</li>
        <li>Efektywne pisanie treści dla osób technicznych i nietechnicznych.</li>
        <li>Rozszerzenie składni, które pozwala zawierać niestandardowe elementy, takie jak audio, wideo i inne</li>
        <li>Markdown jest standardem do pisania treści na platformach takich jak GitHub, GitLab i Reddit.</li>
    </ul>
<h2 id="p4">Funkcjonalności</h2>
    <p>Lista funkcjonalności składni podstawowej oraz rozszerzonej</p>
    <table>
        <tr>
            <th>Funckjonalność</th>
            <th>Opis</th>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(4)">Nagłówki</button>
            </td>
            <td>
                Nagłówki
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(7)">Listy</button>
            </td>
            <td>
                Rozmieszczenie elementów w listach uporządkowanych i nieuporządkowanych
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(8)">Tabele</button>
            </td>
            <td>
                Tabele
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(2)">Komentarze</button>
            </td>
            <td>
                Są one ignorowane przez parsery
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(6)">Linki</button>
            </td>
            <td>
                Linki
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(5)">Obrazy</button>
            </td>
            <td>
                Zawierają funkcjonalności takie jak alt, text czy tytuły
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(3)">Wyróżnienia tekstu</button>
            </td>
            <td>
                Formatowanie tekstu: podkreślnie, pochylenie, pogrubienie i inne
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(9)">Cytaty</button>
            </td>
            <td>
                Cytaty blokowe
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(10)">Bloki kodu</button>
            </td>
            <td>
                Bloki kodu
            </td>
        </tr>
    </table>
<h2 id="p5">Narzędnia do konwertowania Markdown</h2>
    <table>
        <tr>
            <th>Narzędzie</th>
            <th>Opis</th>
        </tr>
        <tr>
            <td><span class="bold">pandoc</span></td>
            <td>Narzędzie słóżące do konwersji Markdown do dokumentów pdf, word lub HTML</td>
        </tr>
        <tr>
            <td><span class="bold">GitHub Flavored Markdown</span></td>
            <td>GitHub markdown używany do formatowania tekstu</td>
        </tr>
    </table>`, `<h1>Markdown - Style</h1>
    <hr>
    <em><p>Ten poradnik odejmuje dodawanie stylu do plików Markdown, takich jak rozmiar czcionki, grubość czcionki itp.</p></em>
    <hr>
    <p>Czasami chcemy dodać do pliku Markdown style takie jak atrybuty CSS.</p>
    <p>Jednak Markdown bazowo nie obsługuje stylów CSS. Istnieją dwa sposoby na obejście tego.</p>
    <h2 id="p1">Jak dodać style do Markdown?</h2>
    <p>Jak wiemy ze strony głównej, Markdown jest konwertowany do pliku HTML. Najprostszą metodą na użycie atrybutów CSS jest pisanie kodu HTML bezpośrednio w plikiu .md</p>
    <p>Możemy to zrobić wewnątrz znacznika <span class="bold">span</span>:</p>
    <pre><code>&#x3C;span style=&#x22;font-weight: bold; color: red;&#x22;&#x3E;Hello World&#x3C;/span&#x3E;</code></pre>
    <p>Lub stworzyć wewnętrzny arkusz stylów:</p>
    <pre><code>&#x3C;style&#x3E;
span {
font-weight: bold;
color: red;
}
&#x3C;/style&#x3E;
&lt;span&gt;Hello&nbsp;World&lt;/span&gt;</code></pre>
    <p>Obydwa kody wygenerują:</p>
    <p><span style="font-weight: bold; color: red;">Hello World</span></p>`, `<h1>Markdown - Komentarze</h1>
    <hr>
    <em><p>Ten poradnik obejmuje komentarze w języku Markdown wraz z przykładami. Komentarze są ignorowane przez parser i są niewidoczne dla użytkownika.</p></em>
    <hr>
    <p>Komentarze są przydatne do opisywania kodu dla innych użytkowników. Są ignorowane przez parsery.</p>
    <h2 id="p1">Jak robić komentarze w Markdown?</h2>
    <p>Komentarze w Markdown można tworzyć na dwa sposoby.</p>
    <p>Po pierwsze, możemy użyć sposobu, który jest używany w kodzie HTML. Jest to najbezpieczniejsze rozwiązanie, ponieważ każdy parser będzie je obsługiwał:</p>
    <pre><code>&lt;!&#45;&#45;&#45;&nbsp;Tutaj&nbsp;jest&nbsp;komentarz&nbsp;&#45;&#45;&#45;&gt;
&lt;!&#45;&#45;&nbsp;Tutaj&nbsp;jest&nbsp;komentarz&nbsp;&#45;&#45;&gt;</code></pre>
    <p>Możemy również używać metody, która jest dostępna od stosunkowo niedawna, lecz nie wszystkie parsery będą ją obsługiwać:</p>
    <pre><code>[Tutaj jest komentarz.]: #</code></pre>`, `<h1>Markdown - Wyróżnienie tekstu</h1>
    <hr>
    <em><p>Ten poradnik obejmuje formatowanie tekstu - pogrubienie, pochylenie, przekreślenie.</p></em>
    <hr>
    <p>Wyróżnienia tekstu używamy do pokazywania ważniejszych treści w naszych dokumentach.</p>
    <h2 id="p1">Jak pogrubić tekst?</h2>
    <p>Pogrubiony tekst można uzyskać zaczynając i kończąc paragraf dwoma <span class="bold">*</span> lub dwoma <span class="bold">_</span>.</p>
    <pre><code>**Pogrubiony tekst**
__Porgubiony tekst__</code></pre>
    <p>To wygeneruje następujący wynik:</p>
    <p style="font-weight: bold;">Pogrubiony tekst</p>
    <h2 id="p2">Jak pochylić tekst?</h2>
    <p>Pochylony tekst można uzyskać zaczynając i kończąc paragraf znakiem <span class="bold">*</span> lub <span class="bold">_</span>.</p>
    <pre><code>*Pochylony tekst*
_Pochylony tekst_</code></pre>
    <p>To wygeneruje następujący wynik:</p>
    <p style="font-style: italic;">Pochylony tekst</p>
    <h2 id="p3">Jak przekreślić tekst?</h2>
    <p>Pochylony tekst można uzyskać zaczynając i kończąc paragraf dwoma znakami <span class="bold">~</span>.</p>
    <pre><code>~~Przekreślony tekst~~</code></pre>
    <p>To wygeneruje następujący wynik:</p>
    <p style="text-decoration: line-through;">Przekreślony tekst</p>`, `<h1>Markdown - Nagłówki</h1>
    <hr>
    <em><p>Ten poradnik obejmuje tworzenie nagłówków w Markdown.</p></em>
    <hr>
    <p>Nagłówki w Markdown są używane do tworzenia nagłówków w HTML (H1, H2, H3 itd).</p>
    <h2 id="p1">Jak stworzyć nagłówki w Markdow?</h2>
    <p>Nagłówki w Markdown tworzy się używając znaku <span class="bold">#</span> w odpowiedniej ilości.</p>
    <pre><code># Nagłówek 1

## Nagłówek 2
        
### Nagłówek 3
        
#### Nagłówek 4
        
##### Nagłówek 5
        
###### Nagłówek 6</code></pre>
    <h2 id="p2">Wygenerowany HTML</h2>
    <p>Interpretacja nagłówków przez parsery:</p>
    <table>
        <tr>
            <th>Markdown</th>
            <th>Wygenerowany HTML</th>
        </tr>
        <tr>
            <td><span class="bold"># Nagłówek 1</span></td>
            <td><span class="bold">&lt;h1&gt;Nagłówek 1&lt;/h1&gt;</span></td>
        </tr>
        <tr>
            <td><span class="bold">## Nagłówek 2</span></td>
            <td><span class="bold">&lt;h2&gt;Nagłówek 2&lt;/h2&gt;</span></td>
        </tr>
        <tr>
            <td><span class="bold">### Nagłówek 3</span></td>
            <td><span class="bold">&lt;h3&gt;Nagłówek 3&lt;/h3&gt;</span></td>
        </tr>
        <tr>
            <td><span class="bold">#### Nagłówek 4</span></td>
            <td><span class="bold">&lt;h4&gt;Nagłówek 4&lt;/h4&gt;</span></td>
        </tr>
        <tr>
            <td><span class="bold">##### Nagłówek 5</span></td>
            <td><span class="bold">&lt;h5&gt;Nagłówek 5&lt;/h5&gt;</span></td>
        </tr>
        <tr>
            <td><span class="bold">###### Nagłówek 6</span></td>
            <td><span class="bold">&lt;h6&gt;Nagłówek 6&lt;/h6&gt;</span></td>
        </tr>
    </table>`, `<h1>Markdown - Obrazy</h1>
    <hr>
    <em><p>Ten poradnik obejmuje wstawianie obrazów i obrazów z przekierowaniem.</p></em>
    <hr>
    <p>Istnieją dwa typy obrazów z różnymi składniami: standardowe oraz będące linkiem do innej treści.</p>
    <h2 id="p1">Standardowe obrazy</h2>
    <p>Dodawanie obrazów jest bardzo proste.</p>
    <p>Zaczynamy stawiając wykrzyknik <span class="bold">!</span>. W nawiasach kwadratowych <span class="bold">[]</span> wpisujemy tekst, który wyświetla się, gdy obrazu nie można wczytać, a link do obrazu oraz jego tytuł umieszczamy w nawiasach okrągłych <span class="bold">()</span>.</p>
    <pre><code>![tekst alternatywny](link do obrazu "tytuł")</code></pre>
    <p>To wygeneruje następujący kod HTML: </p>
    <pre><code>&lt;img src=&quot;link do obrazu&quot; alt=&quot;tekst alternatywny&quot; title=&quot;tytuł&quot;&gt;</code></pre>
    <h2 id="p2">Obrazy z linkiem</h2>
    <p>Składnia obrazów, które są linkami, jest kombinacją składni standardowych obrazów oraz linków.</p>
    <pre><code>[![tekst alternatywny](link do obrazu)](link do innej strony)</code></pre>
    <p>To wygeneruje następujący kod HTML: </p>
    <pre><code>&lt;a href=&quot;link do innej strony&quot;&gt;&lt;img src=&quot;link do obrazu&quot; alt=&quot;tekst alternatywny&quot;&gt;&lt;/a&gt;</code></pre>
    <h2 id="p3">Ustawianie szerokości oraz wysokości obrazów</h2>
    <p>W podstawowej wersji Markdowna nie ma dedykowanej składni do edytowania wysokości i szerokości obrazu. Trzeba to zrobić pisząc bezpośrednio kod HTML.</p>
    <p>Natomiast w rozszerzonej wersji Markdowna posiadamy dedykowaną składnię do edycji wysokości i szerokości: </p>
    <pre><code>![tekst alternatywny](link do obrazu "tytuł"){width=60%, height: 30px}</code></pre>
    <p>Należy pamiętać że nie wszystkie parsery obsługują tą składnie!</p>`, `<h1>Markdown - Linki</h1>
    <hr>
    <em><p>Ten poradnik obejmuje tworzenie linków zewnętrznych, wewnętrznych, do konkretnych części dokumentu, referencyjne i wiele innych.</p></em>
    <hr>
    <h2 id="p1">Linki zewnętrzne</h2>
    <p>Linki zewnętrzne to takie linki, które prowadzą do zewnętrznych domen. Tekst linku wyświetlany w dokumencie jest zawarty w nawiasach kwadratowych <span class="bold">[]</span>, a link znajduje się w nawiasach okrągłych <span class="bold">()</span>.</p>
    <pre><code>[Tekst wyświetlany w dokumencie](adres strony)</code></pre>
    <p>Ten kod wygeneruje następujący kod HTML:</p>
    <pre><code>&lt;a href=&quot;adres strony&quot;&gt;Tekst wyświetlany w dokumencie&lt;/a&gt;</code></pre>
    <h2 id="p2">Linki wewnętrzne</h2>
    <p>Linki wewnętrzne są używane do nawigowania w obrębie tej samej domeny.</p>
    <pre><code>[Tekst wyświetlany w dokumencie](relatywna ścieżka)</code></pre>
    <p>Ten kod wygeneruje następujący kod HTML:</p>
    <pre><code>&lt;a href=&quot;relatywna ścieżka&quot;&gt;Tekst wyświetlany w dokumencie&lt;/a&gt;</code></pre>
    <p>Przykładem relatywnej ścieżki może być na przykład <span class="bold">../../index.html</span></p>
    <h2 id="p3">Linki przekierowujące do konkretnych części dokumentu</h2>
    <p>Czasami chcemy nawigować do elementów, znajdujących się na tej samej stronie. Robimy to w następujący sposób: </p>
    <pre><code>[Tekst wyświetlany w dokumencie](element)</code></pre>
    <p>Elementem może być <span class="bold">#Heading</span>.</p>
    <h2 id="p4">Linki referencyjne</h2>
    <p>Są to linki, do których ścieżkę możemy zdefiniować w innej części dokumentu i wstawić ją analogicznie jak zmienną do funkcji:</p>
    <pre><code>[Tekst wyświetlany na stronie][przykład]
[przykład]: ../../index.html</code></pre>
    <h2 id="p5">Otwieranie linków w nowej karcie</h2>
    <p>Markdown nie obsługuje otwierania linków w nowej karcie. Należy użyć poniższego kodu HTML:</p>
    <pre><code>&lt;a href=&quot;adres strony&quot; target=&quot;_blank&quot;&gt;Tekst wyświetlany w dokumencie&lt;/a&gt;</code></pre>
    <p>Jednak niektóre wariacje Markdowna takie jak Kramdown obsługują następującą składnię:</p>
    <pre><code>[Tekst wyświetlany na stronie](adres strony){:target="_blank"}</code></pre>`, `<h1>Markdown - Listy</h1>
    <hr>
    <em>Ten poradnik obejmuje tworzenie list w Markdown - nieuporządkowanych oraz uporządkowanych razem ze składnią i przykładami.</em>
    <hr>
    <h2 id="p1">Lista nieuporządkowana</h2>
    <p>Jest to lista, której elementy są nieuporządkowane. Możemy ją tworzyć za pomocą <span class="bold">*</span>, <span class="bold">-</span> lub <span class="bold">+</span>.</p>
    <pre><code>* Element 1
* Element 2

+ Element 3
+ Element 4

- Element 5
- Element 6</code></pre>
    <p>To wygeneruje następujący kod HTML:</p>
    <pre><code>&lt;ul&gt;
&lt;li&gt;Element 1&lt;/li&gt;
&lt;li&gt;Element 2&lt;/li&gt;
&lt;li&gt;Element 3&lt;/li&gt;
&lt;li&gt;Element 4&lt;/li&gt;
&lt;li&gt;Element 5&lt;/li&gt;
&lt;li&gt;Element 6&lt;/li&gt;
&lt;/ul&gt;</code></pre>
    <p>A w przeglądarce zobaczymy: </p>
    <ul>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
        <li>Element 4</li>
        <li>Element 5</li>
        <li>Element 6</li>
    </ul>
    <h2 id="p2">Lista uporządkowana</h2>
    <p>To taka lista, w której elementy występują w określonej kolejności. Tworzymy ją za pomocą liczb, kończących się <span class="bold">.</span>.</p>
    <pre><code>1. Element 1
2. Element 2</code></pre>
    <p>To wygeneruje następujący kod HTML:</p>
    <pre><code>&lt;ol&gt;
&lt;li&gt;Element 1&lt;/li&gt;
&lt;li&gt;Element 2&lt;/li&gt;
&lt;/ol&gt;</code></pre>
    <p>A w przeglądarce zobaczymy: </p>
    <ol>
        <li>Element 1</li>
        <li>Element 2</li>
    </ol>
    <h2 id="p3">Lista opisów</h2>
<p>Lista opisów, którą możecie znać chociażby z HTMLa, nie jest dostępna w języku Markdown.</p>`, `<h1>Markdown - Tabele</h1>
<hr>
<em><p>Ten poradnik obejmuje tworzenie tabeli w Markdown oraz rozmieszczanie w niej elementów.</p></em>
<hr>
<h2 id="p1">Tabele</h2>
<p>Początkowo tabele nie były obsługiwane w podstawowej składni Markdown. Jednak gdy niektóre platformy (takie jak Github) zaczęły je obsługiwać, wprowadzono wbudowaną obsługę tabel.</p>
<p>Tabele zawierają wiersze i kolumny oraz nagłówki.</p>
<h2 id="p2">Zasady tworzenia tabeli</h2>
<ul>
    <li>Nagłowki są oddzielone kreskami pionowymi <span class="bold">|</span>.</li>
    <li>Tabele bez nagłówków nie są obsługiwane w podstawowej wersji.</li>
    <li>Poniżej nagówków wymagane są conajmniej trzy myślniki <span class="bold">-</span>. Może być ich więcej.</li>
    <li><span class="bold">|</span> nie są wymagane, ale należy ich używać dla czytelności.</li>
    <li>Można stworzyć wiele wierszy.</li>
    <li>Dane tabeli mogą zawierać formatowany tekst.</li>
</ul>
<h2 id="p3">Składnia</h2>
<p>Nagłówki są tworzone za pomocą minimum trzech myślników <span class="bold">-</span>. Kolumny i nagłówki powinny być separowane kreską pionową <span class="bold">|</span>.</p>
<pre><code>| Nagłówek 1 | Nagłówek 2 | Nagłowek 3 |
| --- | --- | --- |
| **Pogrubiony tekst** | ` + "`Blok kodu`" + ` | Informacja 3 |
| Informacja 4 | Informacja 5 | Informacja 6 |</code></pre>
<p>To wygeneruje następujący kod HTML:</p>
<pre><code>&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;Nagłowek 1&lt;/th&gt;
&lt;th&gt;Nagłowek 2&lt;/th&gt;
&lt;th&gt;Nagłowek 3&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td style=&quot;font-weight: bold&quot;&gt;Pogrubiony tekst&lt;/td&gt;
&lt;td style=&quot;style_dla_bloku_kodu&quot;&gt;Blok kodu&lt;/td&gt;
&lt;td&gt;Informacja 3&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;Informacja 4&lt;/td&gt;
&lt;td&gt;Informacja 5&lt;/td&gt;
&lt;td&gt;Informacja 6&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;</code></pre>
<p>A w przeglądarce zobaczymy:</p>
<table>
    <thead>
       <tr>
          <th>Nagłowek 1</th>
          <th>Nagłowek 2</th>
          <th>Nagłowek 3</th>
       </tr>
    </thead>
    <tbody>
       <tr>
          <td style="font-weight: bold">Pogrubiony tekst</td>
          <td><span class="bold">Blok kodu</span></td>
          <td>Informacja 3</td>
       </tr>
       <tr>
          <td>Informacja 4</td>
          <td>Informacja 5</td>
          <td>Informacja 6</td>
       </tr>
    </tbody>
</table>
<h2 id="p4">Pozycjonowanie elementów</h2>
<p>Markdown obłsuguje proste pozycjonowanie elementów w komórkach. Możemy to zrobić w następujący sposób:</p>
<ul>
    <li>Wyśrodkowanie do lewej: przed myślnikami stawiamy <span class="bold">:</span> - <span class="bold">:---</span></li>
    <li>Wyśrodkowanie do środka: przed i za myślnikami stawiamy <span class="bold">:</span> - <span class="bold">:---:</span></li>
    <li>Wyśrodkowanie do prawej: za myślnikami stawiamy <span class="bold">:</span> - <span class="bold">---:</span></li>
</ul>
<pre><code>| Nagłowek 1 | Nagłowek 2 | Nagłowek 3 |
| :--- | :----: | ---: |
| Informacja 1 | Informacja 2 | Informacja 3 |
| Informacja 4 | Informacja 5 | Informacja 6 |</code></pre>
<p>Kod HTML zależy od tego, co znajduje się w komórkach. Dla tekstu będzie nadawał wartość <span class="bold">text align</span></p>
<p>W przeglądarce zobaczymy:</p>
<table>
    <tr>
        <th style="text-align: left;">Nagłowek 1</th>
        <th style="text-align: center;">Nagłowek 2</th>
        <th style="text-align: right;">Nagłowek 3</th>
    </tr>
    <tr>
        <td style="text-align: left;">Informacja 1</td>
        <td style="text-align: center;">Informacja 2</td>
        <td style="text-align: right;">Informacja 3</td>
    </tr>
    <tr>
        <td style="text-align: left;">Informacja 4</td>
        <td style="text-align: center;">Informacja 5</td>
        <td style="text-align: right;">Informacja 6</td>
    </tr>
</table>`, `<h1>Markdown - Cytaty blokowe</h1>
<hr>
<em><p>Ten poradnik obejmuje tworzenie cytatów blokowych.</p></em>
<hr>
<h2 id="p1">Składnia</h2>
<p>Cytaty blokowe tworzymy za pomocą <span class="bold">></span> na początku każdej linii. Przerwa po znaku większości jest opcjonalna. Po niej znajduje się tekst.</p>
<pre><code>> To jest cytat blokowy</code></pre>
<p>Wygenerowany HTML:</p>
<pre><code>&lt;blockquote&gt;
&lt;p&gt;To jest cytat blokowy&lt;/p&gt;
&lt;/blockquote&gt;</code></pre>
<p>A w przeglądarce zobaczymy:</p>
<blockquote>
    <p>To jest cytat blokowy</p>
</blockquote>
<p>Jako kolejną linię cytatu blokowego możemy dodać pustą linię.</p>
<pre><code>> To jest cytat blokowy
>
> z przerwą</code></pre>
<p>Dzięki temu uzyskamy następujący efekt:</p>
<blockquote>
    <p>To jest cytat blokowy</p>
    <p></p>
    <p>z przerwą</p>
</blockquote>
<h2 id="p2">Zagnieżdżony cytat blokowy</h2>
<p>Zagnieżdżony cytat blokowy tworzymy powtarzając znak większości, np. <span class="bold">>></span>.</p>
<pre><code>> To jest
> zagnieżdżony
> > cytat blokowy</code></pre>
<p>W przeglądarce zobaczymy:</p>
<blockquote>
    <p>To jest</p>
    <p>zagnieżdżony</p>
    <blockquote>
        <p>cytat blokowy</p>
    </blockquote>
</blockquote>
<h2 id="p3">Formatowanie tekstu w cytacie blokowym</h2>
<p>Markdown pozwala nam na używania wielu konstrukcji wewnątrz cytatu blokowego. Wśród nich możemy wyróżnić:</p>
<ul>
    <li>Nagłówki</li>
    <li>Wyróżnienie tekstu</li>
    <li>Blok kodu</li>
</ul>
<pre><code>> #### Nagłówek
> **pogrubiony tekst**
> *podkreślony tekst*
> ~~przekreślony tekst~~
>` + "`blok kodu`" + `</code></pre>
<p>Uzyskamy następujący wynik:</p>
<blockquote>
    <h4>Nagłówek</h4>
    <p style="font-weight: bold;">pogrubiony tekst</p>
    <p style="font-style: italic;">podkreślony tekst</p>
    <p style="text-decoration: line-through">przekreślony tekst</p>
    <p><span class="bold">blok kodu</span></p>
</blockquote>`, `<h1>Markdown - Bloki kodu</h1>
<hr>
<em><p>Ten poradnik obejmuje tworzenie bloków kodu wspierających kolorwanie składni w Githubie.</p></em>
<hr>
<p>Czasami chcemy umieścić fragment kodu w pliku Markdown i oczekujemy od niego kolorowania składni.</p>
<h2 id="p1">Bloki kodu</h2>
<p>Bloki kodu są obsługiwane w podstawowej wersji Markdowna.</p>
<p>Kod zawsze musi zacząć się <span class="bold">` + "```" + `</span>. Następnie podajemy język kodu, a w nowej linii piszemy kod. Całość kończymy również <span class="bold">` + "```" + `</span>.</p>
<p>Markdown obsługuje bloki kodu, lecz nie posiada kolorowania składni (dlatego język podaje się opcjonalnie). Jednak wiele silników, takich jak Github obsługują kolorowanie składni w blokach kodu.</p>
<pre><code>` + "```" + `java
public class Main {
public static void main(String[] args) {
System.out.println("Hello World");
}
}
` + "```" +
`</code></pre>
<p>Jeśli silnik obsługuje kolorowanie składni, to wtedy zobaczymy:</p>
<pre><code>public class Main {
public static void main(String[] args) {
System.out.println("Hello World");
}
}</code></pre>
<p>Kolor składni będzie się różnił od silnika. W powyższym przykładnie (tak jak i na całej stronie) zostało zastosowanie kolorowanie składni motywem <span class="bold">agate</span>.</p>
<h2 id="p2">Oznaczenia języków</h2>
<p>Oznaczenia języków używamy do kolorowania składni w określony sposób, charakterystyczny dla danego języka. Poniżej znajduje się lista oznaczeń dla danych języków:</p>
<ul>
    <li><p>abap (&#39;*.abap&#39;)</p>
    </li>
    <li><p>ada (&#39;.adb&#39;, &#39;.ads&#39;, &#39;*.ada&#39;)</p>
    </li>
    <li><p>ahk (&#39;.ahk&#39;, &#39;.ahkl&#39;)</p>
    </li>
    <li><p>apacheconf (&#39;.htaccess&#39;, &#39;apache.conf&#39;, &#39;apache2.conf&#39;)</p>
    </li>
    <li><p>applescript (&#39;*.applescript&#39;)</p>
    </li>
    <li><p>as (&#39;*.as&#39;)</p>
    </li>
    <li><p>as3 (&#39;*.as&#39;)</p>
    </li>
    <li><p>asy (&#39;*.asy&#39;)</p>
    </li>
    <li><p>bash (&#39;.sh&#39;, &#39;.ksh&#39;, &#39;.bash&#39;, &#39;.ebuild&#39;, &#39;*.eclass&#39;)</p>
    </li>
    <li><p>bat (&#39;.bat&#39;, &#39;.cmd&#39;)</p>
    </li>
    <li><p>befunge (&#39;*.befunge&#39;)</p>
    </li>
    <li><p>blitzmax (&#39;*.bmx&#39;)</p>
    </li>
    <li><p>boo (&#39;*.boo&#39;)</p>
    </li>
    <li><p>brainfuck (&#39;.bf&#39;, &#39;.b&#39;)</p>
    </li>
    <li><p>c (&#39;.c&#39;, &#39;.h&#39;)</p>
    </li>
    <li><p>cfm (&#39;.cfm&#39;, &#39;.cfml&#39;, &#39;*.cfc&#39;)</p>
    </li>
    <li><p>cheetah (&#39;.tmpl&#39;, &#39;.spt&#39;)</p>
    </li>
    <li><p>cl (&#39;.cl&#39;, &#39;.lisp&#39;, &#39;*.el&#39;)</p>
    </li>
    <li><p>clojure (&#39;.clj&#39;, &#39;.cljs&#39;)</p>
    </li>
    <li><p>cmake (&#39;*.cmake&#39;, &#39;CMakeLists.txt&#39;)</p>
    </li>
    <li><p>coffeescript (&#39;*.coffee&#39;)</p>
    </li>
    <li><p>console (&#39;*.sh-session&#39;)</p>
    </li>
    <li><p>control (&#39;control&#39;)</p>
    </li>
    <li><p>cpp (&#39;.cpp&#39;, &#39;.hpp&#39;, &#39;.c++&#39;, &#39;.h++&#39;, &#39;.cc&#39;, &#39;.hh&#39;, &#39;.cxx&#39;, &#39;.hxx&#39;, &#39;*.pde&#39;)</p>
    </li>
    <li><p>csharp (&#39;*.cs&#39;)</p>
    </li>
    <li><p>css (&#39;*.css&#39;)</p>
    </li>
    <li><p>Cucumber (&#39;*.feature&#39;)</p>
    </li>
    <li><p>cython (&#39;.pyx&#39;, &#39;.pxd&#39;, &#39;*.pxi&#39;)</p>
    </li>
    <li><p>d (&#39;.d&#39;, &#39;.di&#39;)</p>
    </li>
    <li><p>delphi (&#39;*.pas&#39;)</p>
    </li>
    <li><p>diff (&#39;.diff&#39;, &#39;.patch&#39;)</p>
    </li>
    <li><p>dpatch (&#39;.dpatch&#39;, &#39;.darcspatch&#39;)</p>
    </li>
    <li><p>duel (&#39;.duel&#39;, &#39;.jbst&#39;)</p>
    </li>
    <li><p>dylan (&#39;.dylan&#39;, &#39;.dyl&#39;)</p>
    </li>
    <li><p>erb (&#39;*.erb&#39;)</p>
    </li>
    <li><p>erl (&#39;*.erl-sh&#39;)</p>
    </li>
    <li><p>erlang (&#39;.erl&#39;, &#39;.hrl&#39;)</p>
    </li>
    <li><p>evoque (&#39;*.evoque&#39;)</p>
    </li>
    <li><p>factor (&#39;*.factor&#39;)</p>
    </li>
    <li><p>felix (&#39;.flx&#39;, &#39;.flxh&#39;)</p>
    </li>
    <li><p>fortran (&#39;.f&#39;, &#39;.f90&#39;)</p>
    </li>
    <li><p>gas (&#39;.s&#39;, &#39;.S&#39;)</p>
    </li>
    <li><p>genshi (&#39;*.kid&#39;)</p>
    </li>
    <li><p>glsl (&#39;.vert&#39;, &#39;.frag&#39;, &#39;*.geo&#39;)</p>
    </li>
    <li><p>gnuplot (&#39;.plot&#39;, &#39;.plt&#39;)</p>
    </li>
    <li><p>go (&#39;*.go&#39;)</p>
    </li>
    <li><p>groff (&#39;.(1234567)&#39;, &#39;.man&#39;)</p>
    </li>
    <li><p>haml (&#39;*.haml&#39;)</p>
    </li>
    <li><p>haskell (&#39;*.hs&#39;)</p>
    </li>
    <li><p>html (&#39;.html&#39;, &#39;.htm&#39;, &#39;.xhtml&#39;, &#39;.xslt&#39;)</p>
    </li>
    <li><p>hx (&#39;*.hx&#39;)</p>
    </li>
    <li><p>hybris (&#39;.hy&#39;, &#39;.hyb&#39;)</p>
    </li>
    <li><p>ini (&#39;.ini&#39;, &#39;.cfg&#39;)</p>
    </li>
    <li><p>io (&#39;*.io&#39;)</p>
    </li>
    <li><p>ioke (&#39;*.ik&#39;)</p>
    </li>
    <li><p>irc (&#39;*.weechatlog&#39;)</p>
    </li>
    <li><p>jade (&#39;*.jade&#39;)</p>
    </li>
    <li><p>java (&#39;*.java&#39;)</p>
    </li>
    <li><p>js (&#39;*.js&#39;)</p>
    </li>
    <li><p>jsp (&#39;*.jsp&#39;)</p>
    </li>
    <li><p>lhs (&#39;*.lhs&#39;)</p>
    </li>
    <li><p>llvm (&#39;*.ll&#39;)</p>
    </li>
    <li><p>logtalk (&#39;*.lgt&#39;)</p>
    </li>
    <li><p>lua (&#39;.lua&#39;, &#39;.wlua&#39;)</p>
    </li>
    <li><p>make (&#39;.mak&#39;, &#39;Makefile&#39;, &#39;makefile&#39;, &#39;Makefile.&#39;, &#39;GNUmakefile&#39;)</p>
    </li>
    <li><p>mako (&#39;*.mao&#39;)</p>
    </li>
    <li><p>maql (&#39;*.maql&#39;)</p>
    </li>
    <li><p>mason (&#39;.mhtml&#39;, &#39;.mc&#39;, &#39;*.mi&#39;, &#39;autohandler&#39;, &#39;dhandler&#39;)</p>
    </li>
    <li><p>markdown (&#39;*.md&#39;)</p>
    </li>
    <li><p>modelica (&#39;*.mo&#39;)</p>
    </li>
    <li><p>modula2 (&#39;.def&#39;, &#39;.mod&#39;)</p>
    </li>
    <li><p>moocode (&#39;*.moo&#39;)</p>
    </li>
    <li><p>mupad (&#39;*.mu&#39;)</p>
    </li>
    <li><p>mxml (&#39;*.mxml&#39;)</p>
    </li>
    <li><p>myghty (&#39;*.myt&#39;, &#39;autodelegate&#39;)</p>
    </li>
    <li><p>nasm (&#39;.asm&#39;, &#39;.ASM&#39;)</p>
    </li>
    <li><p>newspeak (&#39;*.ns2&#39;)</p>
    </li>
    <li><p>objdump (&#39;*.objdump&#39;)</p>
    </li>
    <li><p>objectivec (&#39;*.m&#39;)</p>
    </li>
    <li><p>objectivej (&#39;*.j&#39;)</p>
    </li>
    <li><p>ocaml (&#39;.ml&#39;, &#39;.mli&#39;, &#39;.mll&#39;, &#39;.mly&#39;)</p>
    </li>
    <li><p>ooc (&#39;*.ooc&#39;)</p>
    </li>
    <li><p>perl (&#39;.pl&#39;, &#39;.pm&#39;)</p>
    </li>
    <li><p>php (&#39;.php&#39;, &#39;.php(345)&#39;)</p>
    </li>
    <li><p>postscript (&#39;.ps&#39;, &#39;.eps&#39;)</p>
    </li>
    <li><p>pot (&#39;.pot&#39;, &#39;.po&#39;)</p>
    </li>
    <li><p>pov (&#39;.pov&#39;, &#39;.inc&#39;)</p>
    </li>
    <li><p>prolog (&#39;.prolog&#39;, &#39;.pro&#39;, &#39;*.pl&#39;)</p>
    </li>
    <li><p>properties (&#39;*.properties&#39;)</p>
    </li>
    <li><p>protobuf (&#39;*.proto&#39;)</p>
    </li>
    <li><p>py3tb (&#39;*.py3tb&#39;)</p>
    </li>
    <li><p>pytb (&#39;*.pytb&#39;)</p>
    </li>
    <li><p>python (&#39;.py&#39;, &#39;.pyw&#39;, &#39;.sc&#39;, &#39;SConstruct&#39;, &#39;SConscript&#39;, &#39;.tac&#39;)</p>
    </li>
    <li><p>r (&#39;*.R&#39;)</p>
    </li>
    <li><p>rb (&#39;.rb&#39;, &#39;.rbw&#39;, &#39;Rakefile&#39;, &#39;.rake&#39;, &#39;.gemspec&#39;, &#39;.rbx&#39;, &#39;.duby&#39;)</p>
    </li>
    <li><p>rconsole (&#39;*.Rout&#39;)</p>
    </li>
    <li><p>rebol (&#39;.r&#39;, &#39;.r3&#39;)</p>
    </li>
    <li><p>redcode (&#39;*.cw&#39;)</p>
    </li>
    <li><p>rhtml (&#39;*.rhtml&#39;)</p>
    </li>
    <li><p>rst (&#39;.rst&#39;, &#39;.rest&#39;)</p>
    </li>
    <li><p>sass (&#39;*.sass&#39;)</p>
    </li>
    <li><p>scala (&#39;*.scala&#39;)</p>
    </li>
    <li><p>scaml (&#39;*.scaml&#39;)</p>
    </li>
    <li><p>scheme (&#39;*.scm&#39;)</p>
    </li>
    <li><p>scss (&#39;*.scss&#39;)</p>
    </li>
    <li><p>smalltalk (&#39;*.st&#39;)</p>
    </li>
    <li><p>smarty (&#39;*.tpl&#39;)</p>
    </li>
    <li><p>sourceslist (&#39;sources.list&#39;)</p>
    </li>
    <li><p>splus (&#39;.S&#39;, &#39;.R&#39;)</p>
    </li>
    <li><p>sql (&#39;*.sql&#39;)</p>
    </li>
    <li><p>sqlite3 (&#39;*.sqlite3-console&#39;)</p>
    </li>
    <li><p>squidconf (&#39;squid.conf&#39;)</p>
    </li>
    <li><p>ssp (&#39;*.ssp&#39;)</p>
    </li>
    <li><p>tcl (&#39;*.tcl&#39;)</p>
    </li>
    <li><p>tcsh (&#39;.tcsh&#39;, &#39;.csh&#39;)</p>
    </li>
    <li><p>tex (&#39;.tex&#39;, &#39;.aux&#39;, &#39;*.toc&#39;)</p>
    </li>
    <li><p>text (&#39;*.txt&#39;)</p>
    </li>
    <li><p>v (&#39;.v&#39;, &#39;.sv&#39;)</p>
    </li>
    <li><p>vala (&#39;.vala&#39;, &#39;.vapi&#39;)</p>
    </li>
    <li><p>vbnet (&#39;.vb&#39;, &#39;.bas&#39;)</p>
    </li>
    <li><p>velocity (&#39;.vm&#39;, &#39;.fhtml&#39;)</p>
    </li>
    <li><p>vim (&#39;*.vim&#39;, &#39;.vimrc&#39;)</p>
    </li>
    <li><p>xml (&#39;.xml&#39;, &#39;.xsl&#39;, &#39;.rss&#39;, &#39;.xslt&#39;, &#39;.xsd&#39;, &#39;.wsdl&#39;)</p>
    </li>
    <li><p>xquery (&#39;.xqy&#39;, &#39;.xquery&#39;)</p>
    </li>
    <li><p>xslt (&#39;.xsl&#39;, &#39;.xslt&#39;)</p>
    </li>
    <li><p>yaml (&#39;.yaml&#39;, &#39;.yml&#39;)</p>
    </li>
</ul>
<a href="https://github.com/jincheng9/markdown_supported_languages" target="_blank">Źródło</a>.`, `<h1>Aplikacja służąca konwersji .docx do .md</h1>
<hr>
<em><p>Ten poradnik obejmuje instrukcje instalacji oraz obsługi autorskiego programu służącego konwersji plików .docx na format Markdown.</p></em>
<hr>
<p>Mimo, że w moim projekcie pierwotnie nie zakładałem stworzenia tej aplikacji, to pomysł jej wykonania bardzo mi się spodobał, więc postanowiłem ją napisać i dołączyć w tej podstronie. Wszystkie potrzebne instrukcje znajdują się poniżej.</p>
<h2 id="p1">Instalacja</h2>
<ol>
<li>Należy pobrać aplikacje z <a href="resources/main.py" download target="_blank">tego linku</a>.</li>
<li>Należy pobrać język python, najlepiej w wersji 3.12 (np. z <a href="https://www.python.org/downloads/release/python-3120/" target="_blank">tego linku</a>).</li>
<li>Należy zainstalować podane biblioteki: customtkinter, pypandoc (odpowiednio polecenia <span class="bold">pip install customtkinter</span> i <span class="bold">pip install pypandoc</span>).</li>
</ol>
<h2 id="p2">Uruchomienie i użytkowanie</h2>
<ol>
<li>Należy uruchomić konsolę jako administrator w katalogu, w którym znajduje się plik python, a następnie wykonać polecenie <span class="bold">py main.py</span>.</li>
<li>Pierwsze uruchomienie programu może chwile zająć, ponieważ doinstaluje on potrzebne oprogramowanie (<a href="https://pandoc.org/" target="_blank">pandoc</a>) chyba, że znajduje się ono na komputrze.</li>
<li>Należy wybrać plik .docx do konwersji (można pobrać przykładowy z <a href="resources/exampleDocument.docx" download target="_blank">tego linku</a>) a następnie miejsce, w którym ma się pojawić plik wyjściowy (jak na zdjęciu).</li>
<img src="images/example.png" alt="">
<li>Należy kliknąć przycisk Convert. Jeżeli wszystko zadziała poprawnie pojawi się komunikat o poprawnej konwersji a we wskazanym miejscu plik .md.</li>
</ol>`]
let textEN = [`<h1>Markdown Tutorial</h1>
<hr>
<em><p>This page is the homepage for Markdown tutorials. It covers the basic topics of this markup language, including headers, images, links, lists and many others along with examples.<p></em>
<hr>
<h2 id="p1">What is Markdown?</h2>
    <p>
        <span class="bold">Markdown</span>  is an open-source markup language created by John Gruber. It consists of plain text that is formatted using a specific syntax, which is then transformed into HTML.
    </p>
    <p>It helps users write unformatted text and then convert it into various formats, such as <span class="bold">HTML</span>, <span class="bold">pdf</span> and others.</p>
<h2 id="p2">Markodwn file extensions</h2>
    <p>There is no official file extension for Markdown files.</p>
    <p>You can create plain text with the <span class="bold">.md</span> extension.</p>
    <p>However, there are many other extensions for Markdown files:</p>
    <ul>
        <li>.markdown</li>
        <li>.md</li>
        <li>.mkd</li>
        <li>.mkdown</li>
        <li>.mdown</li>
        <li>.text</li>
    </ul>
    <p>Some people use the HTML extension.</p>
    <p>Github uses <span class="bold">.md</span> as the standard extension.</p>
<h2 id="p3">Advantages</h2>
    <ul>
        <li>It's easy to read and write text that converts to an HTML document.</li>
        <li>Effective writing of content for both technical and non-technical people.</li>
        <li>A extended syntax that allows you to include custom elements such as audio, video and more</li>
        <li>Markdown is the standard for writing content on platforms such as GitHub, GitLab and Reddit.</li>
    </ul>
<h2 id="p4">Features</h2>
    <p>List of functionalities of basic and extended syntax</p>
    <table>
        <tr>
            <th>Feature</th>
            <th>Descripiton</th>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(4)">Headings</button>
            </td>
            <td>
                Headings
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(7)">Lists</button>
            </td>
            <td>
                Placing elements in ordered and unordered lists
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(8)">Tables</button>
            </td>
            <td>
                Tables
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(2)">Comments</button>
            </td>
            <td>
                These are ignored by parsers
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(6)">Links</button>
            </td>
            <td>
                Links
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(5)">Images</button>
            </td>
            <td>
                Include functionalities such as alt text or titles
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(3)">Emphasis</button>
            </td>
            <td>
                Text formatting: underline, italics, bold and more
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(9)">Blockquotes</button>
            </td>
            <td>
                Blockquotes
            </td>
        </tr>
        <tr>
            <td>
                <button onclick="changeConent(10)">Code blocks</button>
            </td>
            <td>
                Code blocks
            </td>
        </tr>
    </table>
<h2 id="p5">Markdown conversion tools</h2>
    <table>
        <tr>
            <th>Tool</th>
            <th>Description</th>
        </tr>
        <tr>
            <td><span class="bold">pandoc</span></td>
            <td>A tool for converting Markdown to pdf, word or HTML documents</td>
        </tr>
        <tr>
            <td><span class="bold">GitHub Flavored Markdown</span></td>
            <td>We're using GitHub markdown to format text</td>
        </tr>
    </table>`, `<h1>Markdown - Styles</h1>
    <hr>
    <em><p>This tutorial covers adding style to Markdown files, such as font size, font weight etc.</p></em>
    <hr>
    <p>Sometimes we want to add styles such as CSS attributes to the Markdown file.</p>
    <p>However, Markdown doesn't support CSS styles on base. There are two ways to get around this.</p>
    <h2 id="p1">How to add styles to Markdown?</h2>
    <p>As we know from the home page, Markdown is converted to an HTML file. The easiest way to use CSS attributes is to write HTML code directly in .md files.</p>
    <p>We can do this inside the <span class="bold">span</span> tag:</p>
    <pre><code>&#x3C;span style=&#x22;font-weight: bold; color: red;&#x22;&#x3E;Hello World&#x3C;/span&#x3E;</code></pre>
    <p>Or create an internal style sheet:</p>
    <pre><code>&#x3C;style&#x3E;
span {
font-weight: bold;
color: red;
}
&#x3C;/style&#x3E;
&lt;span&gt;Hello&nbsp;World&lt;/span&gt;</code></pre>
    <p>Both codes'll generate:</p>
    <p><span style="font-weight: bold; color: red;">Hello World</span></p>`, `<h1>Markdown - Comments</h1>
    <hr>
    <em><p>This tutorial covers Markdown comments with examples. Comments're ignored by the parser and they're invisible to the users.</p></em>
    <hr>
    <p>Comments are useful for describing code to other users. They're ignored by parsers.</p>
    <h2 id="p1">How to create comments in Markdown?</h2>
    <p>Comments in Markdown can be created in two ways.</p>
    <p>First, we can use the way that is used in HTML code. This is the safest solution because any parser will support it:</p>
    <pre><code>&lt;!&#45;&#45;&#45;&nbsp;There's&nbsp;a&nbsp;comment&nbsp;&#45;&#45;&#45;&gt;
&lt;!&#45;&#45;&nbsp;There's&nbsp;a&nbsp;comment&nbsp;&#45;&#45;&gt;</code></pre>
    <p>We can also use a method that has been available for a short time, so not all parsers will support it:</p>
    <pre><code>[There's a comment.]: #</code></pre>`, `<h1>Markdown - Text emphasis</h1>
    <hr>
    <em><p>This tutorial covers text formatting - bold, italic, strikethrough.</p></em>
    <hr>
    <p>We use emphasis to show more important content in our documents.</p>
    <h2 id="p1">How to bold the text?</h2>
    <p>Bold text can be created by starting and ending a paragraph with two <span class="bold">*</span> or two <span class="bold">_</span>.</p>
    <pre><code>**Bold text**
__Bold text__</code></pre>
    <p>This will generate the following result:</p>
    <p style="font-weight: bold;">Bold text</p>
    <h2 id="p2">How to italicize text?</h2>
    <p>You can get italicized text by starting and ending a paragraph with a <span class="bold">*</span> or <span class="bold">_</span> character.</p>
    <pre><code>*Italicized text*
_Italicized text_</code></pre>
    <p>This will generate the following result:</p>
    <p style="font-style: italic;">Italicized text</p>
    <h2 id="p3">How to strikethrough text?</h2>
    <p>You can get strikethrough text by starting and ending a paragraph with two <span class="bold">~</span> characters.</p>
    <pre><code>~~Strikethrough text~~</code></pre>
    <p>This will generate the following result:</p>
    <p style="text-decoration: line-through;">Strikethrough text</p>`, `<h1>Markdown - Headings</h1>
    <hr>
    <em><p>This tutorial covers creating headings in Markdown.</p></em>
    <hr>
    <p>Headings in Markdown are used to create headings in HTML (H1, H2, H3, etc).</p>
    <h2 id="p1">How to create headings in Markdown?</h2>
    <p>Headings in Markdown are created using the <span class="bold">#</span> sign in the appropriate amount.</p>
    <pre><code># Header 1

## Header 2
        
### Header 3
        
#### Header 4
        
##### Header 5
        
###### Header 6</code></pre>
    <h2 id="p2">Generated HTML</h2>
    <p>Interpretation of headers by parsers:</p>
    <table>
        <tr>
            <th>Markdown</th>
            <th>Generated HTML</th>
        </tr>
        <tr>
            <td><span class="bold"># Header 1</span></td>
            <td><span class="bold">&lt;h1&gt;Header 1&lt;/h1&gt;</span></td>
        </tr>
        <tr>
            <td><span class="bold">## Header 2</span></td>
            <td><span class="bold">&lt;h2&gt;Header 2&lt;/h2&gt;</span></td>
        </tr>
        <tr>
            <td><span class="bold">### Header 3</span></td>
            <td><span class="bold">&lt;h3&gt;Header 3&lt;/h3&gt;</span></td>
        </tr>
        <tr>
            <td><span class="bold">#### Header 4</span></td>
            <td><span class="bold">&lt;h4&gt;Header 4&lt;/h4&gt;</span></td>
        </tr>
        <tr>
            <td><span class="bold">##### Header 5</span></td>
            <td><span class="bold">&lt;h5&gt;Header 5&lt;/h5&gt;</span></td>
        </tr>
        <tr>
            <td><span class="bold">###### Header 5</span></td>
            <td><span class="bold">&lt;h6&gt;Header 6&lt;/h6&gt;</span></td>
        </tr>
    </table>`, `<h1>Markdown - Images</h1>
                <hr>
                <em><p>This tutorial covers creating images and linked images.</p></em>
                <hr>
                <p>There are two types of images with different syntaxes: standard images and those that are links to other content.</p>
                <h2 id="p1">Standard images</h2>
                <p>Adding images is very easy.</p>
                <p>We begin by writing an exclamation point <span class="bold">!</span>. We put the text that displays when the image cannot be uploaded in square brackets <span class="bold">[]</span>, and we put the link to the image and its title in round brackets <span class="bold">()</span>.</p>
                <pre><code>![alt text]](url to img "title")</code></pre>
                <p>This will generate the following HTML code:</p>
                <pre><code>&lt;img src=&quot;url to img&quot; alt=&quot;alt text&quot; title=&quot;title&quot;&gt;</code></pre>
                <h2 id="p2">Images with link</h2>
                <p>The syntax of images that are links is a combination of the syntax of standard images and links.</p>
                <pre><code>[![alt text](url to image)](url to other site)</code></pre>
                <p>This will generate the following HTML code:</p>
                <pre><code>&lt;a href=&quot;url to other site&quot;&gt;&lt;img src=&quot;url to image&quot; alt=&quot;alt text&quot;&gt;&lt;/a&gt;</code></pre>
                <h2 id="p3">Set the width and height of images</h2>
                <p>In the basic version of Markdown, there is no dedicated syntax for editing the height and width of an image. You have to do it by writing the HTML code directly.</p>
                <p>On the other hand, in the extended version of Markdown we have a dedicated syntax for editing height and width:</p>
                <pre><code>![alt text](url to img "title"){width=60%, height: 30px}</code></pre>
                <p>Note that not all parsers support this syntax!</p>`, `<h1>Markdown - Links</h1>
                <hr>
                <em><p>This tutorial covers creating external links, internal links, links to specific parts of a document, reference links and much more.</p></em>
                <hr>
                <h2 id="p1">External links</h2>
                <p>External links are those links that lead to external domains. The link text displayed in the document is enclosed in square brackets <span class="bold">[]</span>, and the link is enclosed in round brackets <span class="bold">()</span>.</p>
                <pre><code>[Text displayed in the document](website address)</code></pre>
                <p>This code will generate the following HTML code:</p>
                <pre><code>&lt;a href=&quot;website address&quot;&gt;Text displayed in the document&lt;/a&gt;</code></pre>
                <h2 id="p2">Internal links</h2>
                <p>Internal links are used to navigate within the same domain.</p>
                <pre><code>[](relative address)</code></pre>
                <p>This code will generate the following HTML code:</p>
                <pre><code>&lt;a href=&quot;relative address&quot;&gt;Text displayed in the document&lt;/a&gt;</code></pre>
                <p>An example of a relative address could be <span class="bold">../../index.html</span></p>
                <h2 id="p3">Links that redirect to specific parts of the document</h2>
                <p>Sometimes we want to navigate to elements, located on the same page. We do it in the following way:</p>
                <pre><code>[Text displayed in the document](element)</code></pre>
                <p>An element can be, for example <span class="bold">#Heading</span>.</p>
                <h2 id="p4">Reference links</h2>
                <p>These are links to which we can define a path in another part of the document and insert it like to a variable in a function:</p>
                <pre><code>[Text displayed in the document][example]
[example]: ../../index.html</code></pre>
                <h2 id="p5">Opening links in a new tab</h2>
                <p>Markdown doesn't support opening links in a new tab. You should use the following HTML code:</p>
                <pre><code>&lt;a href=&quot;website address&quot; target=&quot;_blank&quot;&gt;Text displayed in the document&lt;/a&gt;</code></pre>
                <p>However, some Markdown variations such as Kramdown support the following syntax:</p>
                <pre><code>[Text displayed in the document](website address){:target="_blank"}</code></pre>`, `<h1>Markdown - Lists</h1>
                <hr>
                <em><p>This tutorial covers creating lists in Markdown - unordered and ordered along with syntax and examples.</p></em>
                <hr>
                <h2 id="p1">Unordered list</h2>
                <p>This is a list whose elements are unordered. We can create it using <span class="bold">*</span>, <span class="bold">-</span> or <span class="bold">+</span>.</p>
                <pre><code>* Element 1
* Element 2

+ Element 3
+ Element 4

- Element 5
- Element 6</code></pre>
            <p>This will generate the following HTML code:</p>
            <pre><code>&lt;ul&gt;
    &lt;li&gt;Element 1&lt;/li&gt;
    &lt;li&gt;Element 2&lt;/li&gt;
    &lt;li&gt;Element 3&lt;/li&gt;
    &lt;li&gt;Element 4&lt;/li&gt;
    &lt;li&gt;Element 5&lt;/li&gt;
    &lt;li&gt;Element 6&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                <p>And in the browser we will see:</p>
                <ul>
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                    <li>Element 4</li>
                    <li>Element 5</li>
                    <li>Element 6</li>
                </ul>
                <h2 id="p2">Ordered list</h2>
                <p>It is such a list in which the elements occur in a certain order. It is created using numbers, ending <span class="bold">.</span>.</p>
                <pre><code>1. Element 1
2. Element 2</code></pre>
                <p>This will generate the following HTML code:</p>
                <pre><code>&lt;ol&gt;
    &lt;li&gt;Element 1&lt;/li&gt;
    &lt;li&gt;Element 2&lt;/li&gt;
&lt;/ol&gt;</code></pre>
                <p>And in the browser we will see:</p>
                <ol>
                    <li>Element 1</li>
                    <li>Element 2</li>
                </ol>
                <h2 id="p3">Description list</h2>
<p>The description list, which you may be familiar with in HTML, is not available in Markdown.</p>`, `<h1>Markdown - Tables</h1>
<hr>
<em><p>This tutorial covers creating tables in Markdown and aligns the elements in it.</p></em>
<hr>
<h2 id="p1">Tables</h2>
<p>At the beggining, tables weren't supported in the basic Markdown syntax. However, when some platforms (such as Github) began to support them, built-in table support was introduced.</p>
<p>Tables contain rows and columns and headers.</p>
<h2 id="p2">Rules for creating tables</h2>
<ul>
    <li>Headings are separated by vertical dashes <span class="bold">|</span>.</li>
    <li>Tables without headers aren't supported in the basic version.</li>
    <li>At least three hyphens are required below the headers <span class="bold">-</span>. There may be more.</li>
    <li><span class="bold">|</span> aren't nessesary, but should be used for readability.</li>
    <li>Multiple lines can be created.</li>
    <li>Table data can contain formatted text.</li>
</ul>
<h2 id="p3">Syntax</h2>
<p>Headings are created with a minimum of three hyphens <span class="bold">-</span>. Columns and headings should be separated by a vertical dash <span class="bold">|</span>.</p>
<pre><code>| Header 1 | Header 2 | Header 3 |
| --- | --- | --- |
| **bold text** | ` + "`code block`" + ` | Information 3 |
| Information 4 | Information 5 | Information 6 |</code></pre>
<p>This will generate the following HTML code:</p>
<pre><code>&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;Header 1&lt;/th&gt;
&lt;th&gt;Header 2&lt;/th&gt;
&lt;th&gt;Header 3&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td style=&quot;font-weight: bold&quot;&gt;bold text&lt;/td&gt;
&lt;td style=&quot;style_dla_bloku_kodu&quot;&gt;code block&lt;/td&gt;
&lt;td&gt;Information 3&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;Information 4&lt;/td&gt;
&lt;td&gt;Information 5&lt;/td&gt;
&lt;td&gt;Information 6&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;</code></pre>
<p>And in the browser we will see:</p>
<table>
    <thead>
       <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
       </tr>
    </thead>
    <tbody>
       <tr>
          <td style="font-weight: bold">bold text</td>
          <td><span class="bold">code block</span></td>
          <td>Information 3</td>
       </tr>
       <tr>
          <td>Information 4</td>
          <td>Information 5</td>
          <td>Information 6</td>
       </tr>
    </tbody>
</table>
<h2 id="p4">Align items</h2>
<p>Markdown has simple positioning of elements in cells. We can do it in the following way:</p>
<ul>
    <li>Centered to the left: put <span class="bold">:</span> before the hyphens  - <span class="bold">:---</span></li>
    <li>Center to center: put <span class="bold">:</span> before and after hyphens - <span class="bold">:---:</span></li>
    <li>Centered to the right: put <span class="bold">:</span> after the hyphens - <span class="bold">---:</span></li>
</ul>
<pre><code>| Header 1 | Header 2 | Header 3 |
| :--- | :----: | ---: |
| Information 1 | Information 2 | Information 3 |
| Information 4 | Information 5 | Information 6 |</code></pre>
<p>The HTML code depends on what is in the cells. For text, it will give the value <span class="bold">text align</span></p>
<p>In the browser, we will see:</p>
<table>
    <tr>
        <th style="text-align: left;">Header 1</th>
        <th style="text-align: center;">Header 2</th>
        <th style="text-align: right;">Header 3</th>
    </tr>
    <tr>
        <td style="text-align: left;">Information 1</td>
        <td style="text-align: center;">Information 2</td>
        <td style="text-align: right;">Information 3</td>
    </tr>
    <tr>
        <td style="text-align: left;">Information 4</td>
        <td style="text-align: center;">Information 5</td>
        <td style="text-align: right;">Information 6</td>
    </tr>
</table>`, `<h1>Markdown - Blockquotes</h1>
<hr>
<em><p>This tutorial covers creating blockquotes.</p></em>
<hr>
<h2 id="p1">Syntax</h2>
<p>We create blockquotes by using <span class="bold">></span> at the beginning of each line. The break after the majority character is optional. It is followed by text.</p>
<pre><code>> This is a blockquote</code></pre>
<p>Generated HTML:</p>
<pre><code>&lt;blockquote&gt;
&lt;p&gt;This is a blockquote&lt;/p&gt;
&lt;/blockquote&gt;</code></pre>
<p>And in the browser we will see:</p>
<blockquote>
    <p>This is a blockquote</p>
</blockquote>
<p>We can add a blank line as the next line of the blockquote.</p>
<pre><code>> This is a blockquote
>
> with a break</code></pre>
<p>This will create the following effect:</p>
<blockquote>
    <p>This is a blockquote</p>
    <p></p>
    <p>with a break</p>
</blockquote>
<h2 id="p2">Nested blockquote</h2>
<p>You create a nested blockquote by repeating the majority sign, such as. <span class="bold">>></span>.</p>
<pre><code>> This is
> nested
> > blockquote</code></pre>
<p>In the browser, we will see:</p>
<blockquote>
    <p>This is</p>
    <p>nested</p>
    <blockquote>
        <p>blockquote</p>
    </blockquote>
</blockquote>
<h2 id="p3">Formatting text in blockquote</h2>
<p>Markdown allows us to use a number of constructions inside the blockquote. Among them we can detail:</p>
<ul>
    <li>Headings</li>
    <li>Emphasis</li>
    <li>Code blocks</li>
</ul>
<pre><code>> #### Header
> **bold text**
> *italicized text*
> ~~strikethrough text~~
> ` + "`code block`" + `</code></pre>
<p>We will get the following result:</p>
<blockquote>
    <h4>Header</h4>
    <p style="font-weight: bold;">bold text</p>
    <p style="font-style: italic;">italicized text</p>
    <p style="text-decoration: line-through">strikethrough text</p>
    <p><span class="bold">code block</span></p>
</blockquote>`, `<h1>Markdown - Code blocks</h1>
<hr>
<em><p>This tutorial covers creating blocks of code to support syntax highlight in Github.</p></em>
<hr>
<p>Sometimes we want to put a code snippet in a Markdown file and expect it to have syntax highlighting.</p>
<h2 id="p1">Code blocks</h2>
<p>The code blocks are supported in the basic version of Markdown.</p>
<p>The code must always start with a <span class="bold">` + "```" + `</span>. Then we specify the language of the code, and write the code on a new line. We also end the whole thing with a <span class="bold">` + "```" + `</span>.</p>
<p>Markdown supports code blocks, but doesn't have syntax highlighting (so the language is specified optionally). However, many engines such as Github support syntax highlight in code blocks.</p>
<pre><code>` + "```" + `java
public class Main {
public static void main(String[] args) {
System.out.println("Hello World");
}
}
` + "```" + `</code></pre>
<p>If the engine supports syntax highlighting, then we'll see:</p>
<pre><code>public class Main {
public static void main(String[] args) {
System.out.println("Hello World");
}
}</code></pre>
<p>The syntax color will vary depending on the engine. In the above example (as well as throughout the site) was used syntax coloring theme called <span class="bold">Atom one dark reasonable</span>.</p>
<h2 id="p2">Language codes</h2>
<p>We use language codes to color syntax in a language-specific way. Below is a list of codes for the languages:</p>
<ul>
    <li><p>abap (&#39;*.abap&#39;)</p>
    </li>
    <li><p>ada (&#39;.adb&#39;, &#39;.ads&#39;, &#39;*.ada&#39;)</p>
    </li>
    <li><p>ahk (&#39;.ahk&#39;, &#39;.ahkl&#39;)</p>
    </li>
    <li><p>apacheconf (&#39;.htaccess&#39;, &#39;apache.conf&#39;, &#39;apache2.conf&#39;)</p>
    </li>
    <li><p>applescript (&#39;*.applescript&#39;)</p>
    </li>
    <li><p>as (&#39;*.as&#39;)</p>
    </li>
    <li><p>as3 (&#39;*.as&#39;)</p>
    </li>
    <li><p>asy (&#39;*.asy&#39;)</p>
    </li>
    <li><p>bash (&#39;.sh&#39;, &#39;.ksh&#39;, &#39;.bash&#39;, &#39;.ebuild&#39;, &#39;*.eclass&#39;)</p>
    </li>
    <li><p>bat (&#39;.bat&#39;, &#39;.cmd&#39;)</p>
    </li>
    <li><p>befunge (&#39;*.befunge&#39;)</p>
    </li>
    <li><p>blitzmax (&#39;*.bmx&#39;)</p>
    </li>
    <li><p>boo (&#39;*.boo&#39;)</p>
    </li>
    <li><p>brainfuck (&#39;.bf&#39;, &#39;.b&#39;)</p>
    </li>
    <li><p>c (&#39;.c&#39;, &#39;.h&#39;)</p>
    </li>
    <li><p>cfm (&#39;.cfm&#39;, &#39;.cfml&#39;, &#39;*.cfc&#39;)</p>
    </li>
    <li><p>cheetah (&#39;.tmpl&#39;, &#39;.spt&#39;)</p>
    </li>
    <li><p>cl (&#39;.cl&#39;, &#39;.lisp&#39;, &#39;*.el&#39;)</p>
    </li>
    <li><p>clojure (&#39;.clj&#39;, &#39;.cljs&#39;)</p>
    </li>
    <li><p>cmake (&#39;*.cmake&#39;, &#39;CMakeLists.txt&#39;)</p>
    </li>
    <li><p>coffeescript (&#39;*.coffee&#39;)</p>
    </li>
    <li><p>console (&#39;*.sh-session&#39;)</p>
    </li>
    <li><p>control (&#39;control&#39;)</p>
    </li>
    <li><p>cpp (&#39;.cpp&#39;, &#39;.hpp&#39;, &#39;.c++&#39;, &#39;.h++&#39;, &#39;.cc&#39;, &#39;.hh&#39;, &#39;.cxx&#39;, &#39;.hxx&#39;, &#39;*.pde&#39;)</p>
    </li>
    <li><p>csharp (&#39;*.cs&#39;)</p>
    </li>
    <li><p>css (&#39;*.css&#39;)</p>
    </li>
    <li><p>Cucumber (&#39;*.feature&#39;)</p>
    </li>
    <li><p>cython (&#39;.pyx&#39;, &#39;.pxd&#39;, &#39;*.pxi&#39;)</p>
    </li>
    <li><p>d (&#39;.d&#39;, &#39;.di&#39;)</p>
    </li>
    <li><p>delphi (&#39;*.pas&#39;)</p>
    </li>
    <li><p>diff (&#39;.diff&#39;, &#39;.patch&#39;)</p>
    </li>
    <li><p>dpatch (&#39;.dpatch&#39;, &#39;.darcspatch&#39;)</p>
    </li>
    <li><p>duel (&#39;.duel&#39;, &#39;.jbst&#39;)</p>
    </li>
    <li><p>dylan (&#39;.dylan&#39;, &#39;.dyl&#39;)</p>
    </li>
    <li><p>erb (&#39;*.erb&#39;)</p>
    </li>
    <li><p>erl (&#39;*.erl-sh&#39;)</p>
    </li>
    <li><p>erlang (&#39;.erl&#39;, &#39;.hrl&#39;)</p>
    </li>
    <li><p>evoque (&#39;*.evoque&#39;)</p>
    </li>
    <li><p>factor (&#39;*.factor&#39;)</p>
    </li>
    <li><p>felix (&#39;.flx&#39;, &#39;.flxh&#39;)</p>
    </li>
    <li><p>fortran (&#39;.f&#39;, &#39;.f90&#39;)</p>
    </li>
    <li><p>gas (&#39;.s&#39;, &#39;.S&#39;)</p>
    </li>
    <li><p>genshi (&#39;*.kid&#39;)</p>
    </li>
    <li><p>glsl (&#39;.vert&#39;, &#39;.frag&#39;, &#39;*.geo&#39;)</p>
    </li>
    <li><p>gnuplot (&#39;.plot&#39;, &#39;.plt&#39;)</p>
    </li>
    <li><p>go (&#39;*.go&#39;)</p>
    </li>
    <li><p>groff (&#39;.(1234567)&#39;, &#39;.man&#39;)</p>
    </li>
    <li><p>haml (&#39;*.haml&#39;)</p>
    </li>
    <li><p>haskell (&#39;*.hs&#39;)</p>
    </li>
    <li><p>html (&#39;.html&#39;, &#39;.htm&#39;, &#39;.xhtml&#39;, &#39;.xslt&#39;)</p>
    </li>
    <li><p>hx (&#39;*.hx&#39;)</p>
    </li>
    <li><p>hybris (&#39;.hy&#39;, &#39;.hyb&#39;)</p>
    </li>
    <li><p>ini (&#39;.ini&#39;, &#39;.cfg&#39;)</p>
    </li>
    <li><p>io (&#39;*.io&#39;)</p>
    </li>
    <li><p>ioke (&#39;*.ik&#39;)</p>
    </li>
    <li><p>irc (&#39;*.weechatlog&#39;)</p>
    </li>
    <li><p>jade (&#39;*.jade&#39;)</p>
    </li>
    <li><p>java (&#39;*.java&#39;)</p>
    </li>
    <li><p>js (&#39;*.js&#39;)</p>
    </li>
    <li><p>jsp (&#39;*.jsp&#39;)</p>
    </li>
    <li><p>lhs (&#39;*.lhs&#39;)</p>
    </li>
    <li><p>llvm (&#39;*.ll&#39;)</p>
    </li>
    <li><p>logtalk (&#39;*.lgt&#39;)</p>
    </li>
    <li><p>lua (&#39;.lua&#39;, &#39;.wlua&#39;)</p>
    </li>
    <li><p>make (&#39;.mak&#39;, &#39;Makefile&#39;, &#39;makefile&#39;, &#39;Makefile.&#39;, &#39;GNUmakefile&#39;)</p>
    </li>
    <li><p>mako (&#39;*.mao&#39;)</p>
    </li>
    <li><p>maql (&#39;*.maql&#39;)</p>
    </li>
    <li><p>mason (&#39;.mhtml&#39;, &#39;.mc&#39;, &#39;*.mi&#39;, &#39;autohandler&#39;, &#39;dhandler&#39;)</p>
    </li>
    <li><p>markdown (&#39;*.md&#39;)</p>
    </li>
    <li><p>modelica (&#39;*.mo&#39;)</p>
    </li>
    <li><p>modula2 (&#39;.def&#39;, &#39;.mod&#39;)</p>
    </li>
    <li><p>moocode (&#39;*.moo&#39;)</p>
    </li>
    <li><p>mupad (&#39;*.mu&#39;)</p>
    </li>
    <li><p>mxml (&#39;*.mxml&#39;)</p>
    </li>
    <li><p>myghty (&#39;*.myt&#39;, &#39;autodelegate&#39;)</p>
    </li>
    <li><p>nasm (&#39;.asm&#39;, &#39;.ASM&#39;)</p>
    </li>
    <li><p>newspeak (&#39;*.ns2&#39;)</p>
    </li>
    <li><p>objdump (&#39;*.objdump&#39;)</p>
    </li>
    <li><p>objectivec (&#39;*.m&#39;)</p>
    </li>
    <li><p>objectivej (&#39;*.j&#39;)</p>
    </li>
    <li><p>ocaml (&#39;.ml&#39;, &#39;.mli&#39;, &#39;.mll&#39;, &#39;.mly&#39;)</p>
    </li>
    <li><p>ooc (&#39;*.ooc&#39;)</p>
    </li>
    <li><p>perl (&#39;.pl&#39;, &#39;.pm&#39;)</p>
    </li>
    <li><p>php (&#39;.php&#39;, &#39;.php(345)&#39;)</p>
    </li>
    <li><p>postscript (&#39;.ps&#39;, &#39;.eps&#39;)</p>
    </li>
    <li><p>pot (&#39;.pot&#39;, &#39;.po&#39;)</p>
    </li>
    <li><p>pov (&#39;.pov&#39;, &#39;.inc&#39;)</p>
    </li>
    <li><p>prolog (&#39;.prolog&#39;, &#39;.pro&#39;, &#39;*.pl&#39;)</p>
    </li>
    <li><p>properties (&#39;*.properties&#39;)</p>
    </li>
    <li><p>protobuf (&#39;*.proto&#39;)</p>
    </li>
    <li><p>py3tb (&#39;*.py3tb&#39;)</p>
    </li>
    <li><p>pytb (&#39;*.pytb&#39;)</p>
    </li>
    <li><p>python (&#39;.py&#39;, &#39;.pyw&#39;, &#39;.sc&#39;, &#39;SConstruct&#39;, &#39;SConscript&#39;, &#39;.tac&#39;)</p>
    </li>
    <li><p>r (&#39;*.R&#39;)</p>
    </li>
    <li><p>rb (&#39;.rb&#39;, &#39;.rbw&#39;, &#39;Rakefile&#39;, &#39;.rake&#39;, &#39;.gemspec&#39;, &#39;.rbx&#39;, &#39;.duby&#39;)</p>
    </li>
    <li><p>rconsole (&#39;*.Rout&#39;)</p>
    </li>
    <li><p>rebol (&#39;.r&#39;, &#39;.r3&#39;)</p>
    </li>
    <li><p>redcode (&#39;*.cw&#39;)</p>
    </li>
    <li><p>rhtml (&#39;*.rhtml&#39;)</p>
    </li>
    <li><p>rst (&#39;.rst&#39;, &#39;.rest&#39;)</p>
    </li>
    <li><p>sass (&#39;*.sass&#39;)</p>
    </li>
    <li><p>scala (&#39;*.scala&#39;)</p>
    </li>
    <li><p>scaml (&#39;*.scaml&#39;)</p>
    </li>
    <li><p>scheme (&#39;*.scm&#39;)</p>
    </li>
    <li><p>scss (&#39;*.scss&#39;)</p>
    </li>
    <li><p>smalltalk (&#39;*.st&#39;)</p>
    </li>
    <li><p>smarty (&#39;*.tpl&#39;)</p>
    </li>
    <li><p>sourceslist (&#39;sources.list&#39;)</p>
    </li>
    <li><p>splus (&#39;.S&#39;, &#39;.R&#39;)</p>
    </li>
    <li><p>sql (&#39;*.sql&#39;)</p>
    </li>
    <li><p>sqlite3 (&#39;*.sqlite3-console&#39;)</p>
    </li>
    <li><p>squidconf (&#39;squid.conf&#39;)</p>
    </li>
    <li><p>ssp (&#39;*.ssp&#39;)</p>
    </li>
    <li><p>tcl (&#39;*.tcl&#39;)</p>
    </li>
    <li><p>tcsh (&#39;.tcsh&#39;, &#39;.csh&#39;)</p>
    </li>
    <li><p>tex (&#39;.tex&#39;, &#39;.aux&#39;, &#39;*.toc&#39;)</p>
    </li>
    <li><p>text (&#39;*.txt&#39;)</p>
    </li>
    <li><p>v (&#39;.v&#39;, &#39;.sv&#39;)</p>
    </li>
    <li><p>vala (&#39;.vala&#39;, &#39;.vapi&#39;)</p>
    </li>
    <li><p>vbnet (&#39;.vb&#39;, &#39;.bas&#39;)</p>
    </li>
    <li><p>velocity (&#39;.vm&#39;, &#39;.fhtml&#39;)</p>
    </li>
    <li><p>vim (&#39;*.vim&#39;, &#39;.vimrc&#39;)</p>
    </li>
    <li><p>xml (&#39;.xml&#39;, &#39;.xsl&#39;, &#39;.rss&#39;, &#39;.xslt&#39;, &#39;.xsd&#39;, &#39;.wsdl&#39;)</p>
    </li>
    <li><p>xquery (&#39;.xqy&#39;, &#39;.xquery&#39;)</p>
    </li>
    <li><p>xslt (&#39;.xsl&#39;, &#39;.xslt&#39;)</p>
    </li>
    <li><p>yaml (&#39;.yaml&#39;, &#39;.yml&#39;)</p>
    </li>
</ul>
<a href="https://github.com/jincheng9/markdown_supported_languages" target="_blank">Source</a>.`, `<h1>Application for Converting .docx to .md</h1>
<hr>
<em><p>This guide covers the installation and usage instructions for a custom program designed to convert .docx files to Markdown format.</p></em>
<hr>
<p>Although I originally did not plan to create this application, I really liked the idea of doing it, so I decided to write it and include it on this subpage. All necessary instructions are provided below.</p>
<h2 id="p1">Installation</h2>
<ol>
<li>Download the application from <a href="resources/main.py" download target="_blank">this link</a>.</li>
<li>Download Python, preferably version 3.12 (e.g., from <a href="https://www.python.org/downloads/release/python-3120/" target="_blank">this link</a>).</li>
<li>Install the required libraries: customtkinter, pypandoc (using the commands <span class="bold">pip install customtkinter</span> and <span class="bold">pip install pypandoc</span> respectively).</li>
</ol>
<h2 id="p2">Running and Using the Application</h2>
<ol>
<li>Run the console as an administrator in the directory where the Python file is located, and then execute the command <span class="bold">py main.py</span>.</li>
<li>The first run of the program may take a while as it will install the necessary software (<a href="https://pandoc.org/" target="_blank">pandoc</a>) unless it is already on the computer.</li>
<li>Select the .docx file for conversion (you can download a sample from <a href="resources/exampleDocument.docx" download target="_blank">this link</a>) and then choose the location where the output file should appear (as shown in the picture).</li>
<img src="images/example.png" alt="">
<li>Click the Convert button. If everything works correctly, a message indicating successful conversion will appear, and the .md file will be in the specified location.</li>
</ol>
`]
let contextMenuPL = [`<h2>Na tej stronie</h2>
<a href="#p1">Co to jest Markdown?</a>
<hr>
<a href="#p2">Rozszerzenie plików Markdown</a>
<hr>
<a href="#p3">Zalety</a>
<hr>
<a href="#p4">Funkcjonalności</a>
<hr>
<a href="#p5">Narzędnia do konwertowania Markdown</a>
<hr>`, `<h2>Na tej stronie</h2>
<a href="#p1">Jak dodać style do Markdown?</a>
<hr>`, `<h2>Na tej stronie</h2>
<a href="#p1">Jak robić komentarze w Markdown?</a>
<hr>`, `<h2>Na tej stronie</h2>
<a href="#p1">Jak pogrubić tekst?</a>
<hr>
<a href="#p2">Jak pochylić tekst?</a>
<hr>
<a href="#p3">Jak przekreślić tekst?</a>
<hr>`, `<h2>Na tej stronie</h2>
<a href="#p1">Jak stworzyć nagłówki w Markdow?</a>
<hr>
<a href="#p2">Wygenerowany HTML</a>
<hr>`, `<h2>Na tej stronie</h2>
<a href="#p1">Standardowe obrazy</a>
<hr>
<a href="#p2">Obrazy z linkiem</a>
<hr>
<a href="#p3">Ustawianie szerokości oraz wysokości obrazów</a>`, `<h2>Na tej stronie</h2>
<a href="#p1">Linki zewnętrzne</a>
<hr>
<a href="#p2">Linki wewnętrzne</a>
<hr>
<a href="#p3">Linki przekierowujące do konkretnych części dokumentu</a>
<hr>
<a href="#p4">Linki referencyjne</a>
<hr>
<a href="#p5">Otwieranie linków w nowej karcie</a>
<hr>`, `<h2>Na tej stronie</h2>
<a href="#p1">Lista nieuporządkowana</a>
<hr>
<a href="#p2">Lista uporządkowana</a>
<hr>
<a href="#p3">Lista opisów</a>
<hr>`, `<h2>Na tej stronie</h2>
<a href="#p1">Tabele</a>
<hr>
<a href="#p2">Zasady tworzenia tabeli</a>
<hr>
<a href="#p3">Składnia</a>
<hr>
<a href="#p4">Pozycjonowanie elementów</a>
<hr>`, `<h2>Na tej stronie</h2>
<a href="#p1">Składnia</a>
<hr>
<a href="#p2">Zagnieżdżony cytat blokowy</a>
<hr>
<a href="#p3">Formatowanie tekstu w cytacie blokowym</a>
<hr>`, `<h2>Na tej stronie</h2>
<a href="#p1">Bloki kodu</a>
<hr>
<a href="#p2">Oznaczenia języków</a>
<hr>`, `<h2>Na tej stronie</h2>
<a href="#p1">Instalacja</a>
<hr>
<a href="#p2">Uruchomienie i użytkowanie</a>
<hr>`]
let contextMenuEN = [`<h2>On this page</h2>
<a href="#p1">What is Markdown?</a>
<hr>
<a href="#p2">Markodwn file extensions</a>
<hr>
<a href="#p3">Advantages</a>
<hr>
<a href="#p4">Features</a>
<hr>
<a href="#p5">Markdown conversion tools</a>
<hr>`, `<h2>On this page</h2>
<a href="#p1">How to add styles to Markdown?</a>
<hr>`, `<h2>On this page</h2>
<a href="#p1">How to create comments in Markdown?</a>
<hr>`, `<h2>On this page</h2>
<a href="#p1">How to bold the text?</a>
<hr>
<a href="#p2">How to italicize text?</a>
<hr>
<a href="#p3">How to strikethrough text?</a>
<hr>`, `<h2>On this page</h2>
<a href="#p1">How to create headings in Markdown?</a>
<hr>
<a href="#p2">Generated HTML</a>
<hr>`, `<h2>On this page</h2>
<a href="#p1">Standard images</a>
<hr>
<a href="#p2">Images with link</a>
<hr>
<a href="#p3">Set the width and height of images</a>
<hr>
`, `<h2>On this page</h2>
<a href="#p1">External links</a>
<hr>
<a href="#p2">Internal links</a>
<hr>
<a href="#p3">Links that redirect to specific parts of the document</a>
<hr>
<a href="#p4">Reference links</a>
<hr>
<a href="#p5">Opening links in a new tab</a>
<hr>`, `<h2>On this page</h2>
<a href="#p1">Unordered list</a>
<hr>
<a href="#p2">Ordered list</a>
<hr>
<a href="#p3">Description list</a>
<hr>
`, `<h2>On this page</h2>
<a href="#p1">Tables</a>
<hr>
<a href="#p2">Rules for creating tables</a>
<hr>
<a href="#p3">Syntax</a>
<hr>
<a href="#p4">Align items</a>
<hr>
`, `<h2>On this page</h2>
<a href="#p1">Syntax</a>
<hr>
<a href="#p2">Nested blockquote</a>
<hr>
<a href="#p3">Formatting text in blockquote</a>
<hr>`, `<h2>On this page</h2>
<a href="#p1">Code blocks</a>
<hr>
<a href="#p2">Language codes</a>
<hr>
`, `<h2>On this page</h2>
<a href="#p1">Installation</a>
<hr>
<a href="#p2">Running and Using the Application</a>
<hr>
`]

let menuPL = `<h2>Menu główne</h2>
<button onclick="changeConent(0)">Strona główna</button>
<button onclick="changeConent(1)">Style</button>
<button onclick="changeConent(2)">Komentarze</button>
<button onclick="changeConent(3)">Wyróżnienia tekstu</button>
<button onclick="changeConent(4)">Nagłówki</button>
<button onclick="changeConent(5)">Obrazy</button>
<button onclick="changeConent(6)">Linki</button>
<button onclick="changeConent(7)">Listy</button>
<button onclick="changeConent(8)">Tabele</button>
<button onclick="changeConent(9)">Cytaty</button>
<button onclick="changeConent(10)">Bloki kodu</button>
<button onclick="changeConent(11)">Aplikacja .docx do .md</button>`
let menuEN = `<h2>Main menu</h2>
<button onclick="changeConent(0)">Homepage</button>
<button onclick="changeConent(1)">Styles</button>
<button onclick="changeConent(2)">Comments</button>
<button onclick="changeConent(3)">Text emphasis</button>
<button onclick="changeConent(4)">Headings</button>
<button onclick="changeConent(5)">Images</button>
<button onclick="changeConent(6)">Links</button>
<button onclick="changeConent(7)">Lists</button>
<button onclick="changeConent(8)">Tables</button>
<button onclick="changeConent(9)">Blockquotes</button>
<button onclick="changeConent(10)">Code blocks</button>
<button onclick="changeConent(11)">.docx to .md application</button>`

let article = document.querySelector('article')
let contextMenu = document.querySelector('.context-menu')
let menu = document.querySelector('.menu')

let selectedLanguage
let selectedContent

if (localStorage.getItem('language') && localStorage.getItem('selectedContent')) {
    selectedLanguage = parseInt(localStorage.getItem('language'));
    selectedContent = parseInt(localStorage.getItem('selectedContent'));
} else {
    localStorage.setItem('language', 0);
    localStorage.setItem('selectedContent', 0);
    selectedLanguage = 0;
    selectedContent = 0;
}

article.innerHTML = selectedLanguage === 0 ? textPL[selectedContent] : textEN[selectedContent];
contextMenu.innerHTML = selectedLanguage === 0 ? contextMenuPL[selectedContent] : contextMenuEN[selectedContent];
menu.innerHTML = selectedLanguage === 0 ? menuPL : menuEN;
hljs.highlightAll();

let buttons = document.querySelectorAll('button')
buttons[selectedContent].classList.add('active');

function changeConent(id) {
    localStorage.setItem('selectedContent', id);
    if(selectedLanguage == 0) {
        article.innerHTML = textPL[id]
        contextMenu.innerHTML = contextMenuPL[id]
        menu.innerHTML = menuPL
        hljs.highlightAll();
    } else {
        article.innerHTML = textEN[id]
        contextMenu.innerHTML = contextMenuEN[id]
        menu.innerHTML = menuEN
        hljs.highlightAll();
    }

    let buttons = document.querySelectorAll('button')

    buttons[selectedContent].classList.remove('active')
    buttons[id].classList.add('active')
    
    selectedContent = id
    globalThis.scrollTo(0, 0)
}

function changeLanguage(id) {
    selectedLanguage = id
    localStorage.setItem('language', id);
    changeConent(selectedContent)
}