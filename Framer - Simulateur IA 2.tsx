import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

/* Apana — Simulateur IA n°2 « Entraînez votre IA, de zéro à utile »
   Réglage Partie : « Tout » pour le simulateur complet dans un seul widget,
   ou 1 (étapes 1-3) et 2 (étapes 4-6) en posant le composant deux fois.
   En deux parties, le bouton « Continuer → » de la partie 1 fait défiler
   jusqu'à la partie 2, qui se signale elle-même au chargement. */

const EINSTEIN = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAwCAYAAACCEC3KAAAWfmNhQlgAABZ+anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAAFlhqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOjllZDM1MWIzLWM4YTEtNDlkMS1hN2FkLTQxZjRkYjdmODc2MwAAAAOTanVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAAuGp1bWIAAABEanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5pbmdyZWRpZW50LnYzAAAAABhjMnNoC6PVvKLwrYvbjNWivmPUkgAAAGxjYm9yo2lkYzpmb3JtYXRpaW1hZ2UvcG5namluc3RhbmNlSUR4LHhtcDppaWQ6ODY2ZTczMzktMzJlYi00N2M2LWJhMjQtZWYyNTkzYjdjOGM4bHJlbGF0aW9uc2hpcGhwYXJlbnRPZgAAAeJqdW1iAAAAQWp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuYWN0aW9ucy52MgAAAAAYYzJzaLugZaoUPLo/meXY6htRNcYAAAGZY2JvcqJnYWN0aW9uc4KiZmFjdGlvbmtjMnBhLm9wZW5lZGpwYXJhbWV0ZXJzoWtpbmdyZWRpZW50c4GiY3VybHgtc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5pbmdyZWRpZW50LnYzZGhhc2hYILNt0IvjHDlGL1BCmKrPEX6jq+pbpmARdRmNXtNVoCaHpGZhY3Rpb254HWNvbS5hbnRocm9waWMuY2xhdWRlLnByb3ZpZGVkanBhcmFtZXRlcnOheB9jb20uYW50aHJvcGljLm9yaWdpbi1jb25maWRlbmNlZ3Vua25vd25rZGVzY3JpcHRpb254ZkNsYXVkZSBwcm92aWRlZCB0aGlzIGZpbGUgYXQgdGhlIHJlcXVlc3Qgb2YgYSB1c2VyIGFuZCBtYXkgaGF2ZSBjcmVhdGVkIG9yIG1vZGlmaWVkIHRoZSBmaWxlIGNvbnRlbnRzLm1zb2Z0d2FyZUFnZW50oWRuYW1lZkNsYXVkZXJhbGxBY3Rpb25zSW5jbHVkZWT1AAAAyGp1bWIAAABAanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5oYXNoLmRhdGEAAAAAGGMyc2i3lsBLFIJ19/leoYuy+Yw2AAAAgGNib3KlY2FsZ2ZzaGEyNTZjcGFkTQAAAAAAAAAAAAAAAABkaGFzaFggRpUkqCuVIpLvDRkbRwF/SsAMjjn+dPpjOXROAog5tvtkbmFtZW5qdW1iZiBtYW5pZmVzdGpleGNsdXNpb25zgaJlc3RhcnQYIWZsZW5ndGgZFooAAAI+anVtYgAAACdqdW1kYzJjbAARABCAAACqADibcQNjMnBhLmNsYWltLnYyAAAAAg9jYm9ypWNhbGdmc2hhMjU2aXNpZ25hdHVyZXhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTo5ZWQzNTFiMy1jOGExLTQ5ZDEtYTdhZC00MWY0ZGI3Zjg3NjMvYzJwYS5zaWduYXR1cmVqaW5zdGFuY2VJRHgseG1wOmlpZDpkMjViMWQyYy1hMjNmLTQ2YjgtOWNhZC0wNTQxNzA4ZDdjY2JyY3JlYXRlZF9hc3NlcnRpb25zg6JjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggs23Qi+McOUYvUEKYqs8RfqOr6lumYBF1GY1e01WgJoeiY3VybHgqc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5hY3Rpb25zLnYyZGhhc2hYIKYqa3gHrJHfXLdCICHDiSg45tGmmlXX6sVSDdk2xgoXomN1cmx4KXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaGFzaC5kYXRhZGhhc2hYID16Ci65oLqMbGUvLwwJTbB/3xWOwJSiLyZ6NFPfoTbsdGNsYWltX2dlbmVyYXRvcl9pbmZvo2RuYW1lb0FudGhyb3BpYyBGaWxlc2d2ZXJzaW9uZTEuMC4wa3NwZWNWZXJzaW9uZTIuNC4wAAAQOGp1bWIAAAAoanVtZGMyY3MAEQAQgAAAqgA4m3EDYzJwYS5zaWduYXR1cmUAAAAQCGNib3LShFkCEqIBJhghWQIKMIICBjCCAY2gAwIBAgIUQOWgCu7COdC+uIP6BkIFPWdVEwAwCgYIKoZIzj0EAwMwSTEXMBUGA1UEChMOQW50aHJvcGljLCBQQkMxLjAsBgNVBAMTJUFudGhyb3BpYyBDb250ZW50IENyZWRlbnRpYWxzIFJvb3QgQ0EwHhcNMjYwODA3MTg0MzU2WhcNMjgwODA2MTk0MzU2WjBEMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEpMCcGA1UEAxMgQW50aHJvcGljIENsYXVkZSBDb250ZW50IFNpZ25pbmcwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASYegpry1AYBRTVNL1CpTlbROnY3dey+UrsF9C3phYrATN3ZHf93Mo8RQN0KOUuOn19P4oWNFWe5n2/She9N7eTo1gwVjAOBgNVHQ8BAf8EBAMCB4AwFQYDVR0lBA4wDAYKKwYBBAGD6F4CATAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFM5R4gSBTmRbI/jjxM+aPpzB11zCMAoGCCqGSM49BAMDA2cAMGQCMDFzHRSeAXrSy1WOzkbhPZ6Km2wGTmZ/2gK18k8BQGXyqz88Rdrz6CTX9flAnYNVxgIwcF9c3fVhqmJKpi+UhasNUMko69cyX6STPfta3Q8EjyzDjzoyrol46FP6VFHhvUcJoWNwYWRZDZ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2WEAKWea0MLVQL4ABguvZtWu1TiUub07UZpdmMm+Gy+kYE6b80v5IJAsyjnLWNToooCBfAcXUhTkIarfk3SB+NBQZKw3BowAADs5JREFUeNrtW3twXNV5/517d+++rnTPruWHpLUlGWyM/ADCmFg8QpoJHWumpVBgEJ7ihjauZVJqj0PbzDBdjbbQZKbUMbTGImSYJKbGHps2JSQSYBebJEhA7Tg2loJl0K6t92P33N17d+/eu/ee/qHdtSSnM2UGyXLib+b8s3fP3nN+53v8vu87C1yTa3JNpgjnnEwdkUhEAEBmPBemfmfq82sCIBKJCO0d7a6Zn3d2dboL4LkKQ+Sci21te93Fzzq7Ot2FufMCVHIlNZEQAgD82Wd3UVn2eShVBIUGtcaNjWnOuQuATQjhhXXy33YQDz30kGvNmjV5QojzewdkAUR+5swZT/9A/x+rLFnNmPoxgByAOgAnm5u3nTpwYL+i0GADgFsBjC2tXDSRzppGPNY3XBmsToSqQqNr167VOediS0sLj0ajzu8FkAX/BgDY8tgj0l82b/9zAE8zxs7CVMfUjHMRQK2YNxbKFZX/Fa4OrwKwUdO1ajkg6wAMAKama4wxFqeU9gJ4u2FDwxtFDb1SYM65Rra0cIHzFlRVVdbX1Na+TimtAzAOgALIAFAZY2FKaQ6AtzDNAiACEOSADAAYTY5mzYz5NqU0xRg7qo0PHXzoz/7C+G0uYC5EmMvA0ta21/2lL5+SotGoQ6liUkplOSDnAQQLIJUDWKqypBOP9XkZYzYAs7BOB4Cl6VpO0zXDL/lFSqmbMfbfyYt9ZnyY1XLO3ZFI5IoEINdcmPOWxx4RotGo3d7RvtLMDStH3z3q9kv+v5YDskfTNRcAu7B5BwBRaFAEYIerw4Kma+LU3yvzSeCCxDVdgxyQvwrAE4+RH8qyL08IMYsKwjlHIVD9Tph2kfM5nV2dqxljJqW0UQ7If6vpWhgAGGOglKJospquAQAyZgZ+yV/6oZnPCyZcXP8IgPMA3onH+r7X1LTp4oED+8Wmpk3274pp8zNnzkhTNv4AgM0FELkckBGuDqPMJ4E4JnQ2goyZAQD4JT/kgFwa/QP96B/on3ZIGTPjMMa4HJAXA7hDDshPKTT45rPP7rqrqWmT3da2133VayTnXCCEOEffPVrrl/xr4rE+u6a27h/kgNyg6Zpd8IlE0zU4iRgWppOQK8qQ9oeQIKFLC7R0hAbPgS+rQcjPYWcnNbIPNShqtOSXeEF7bTkgu86ePfMWY+r9g4NDRn39KjIXmjlrGtnS0gLOOentPjcAIKDQ4DezRm7dlPeWQFwmqiivCUEIuKGQNOoQL41a9zjKr6tGyM/hEQHRN2nidYiDWDrC1WH4JX/RhQgAUFNb9wVKlS9Go1GnprZOuKpNu7W1lQMQmpu3Wf3ne85q40MjOSObL5q0FFDgJGJYxJNwK3Ta3CJYJclnYWc1ZDQNdlYrPa/16VN95lTfuUChwdsKvpVc1UAWI2Z7RzsFMHZLwB4DIGu6xgHAuPhrVKRiKFsQumxu0Xz/Lyk9z2cR4onpr3VMm1g6oZTeyDknhw4dcqYmAlcdkAUfaass6V510/pVvb5wmlKalgOyoOkaX5hOwh8MlrTLUtlnfodflqG48yCWXgKSCxKSugUA4a73uyqi0ajd9X7XrNM8cRaBFI8dO4bn/uWf8uGa5U9SSp8o80kSiCgoF04K3HbgXxwEz5sQfTKI+NnP1DJN+P1e5PM2ssQHAJAkiQuiIMRjfeUqYz0PPvhAz2sHfiSePPXRrAacWT0pQojT/vqBpZJfWiMHZDcc0wZAHNMC5ypScSChj2FZzXLIi4PITdmqRwRyNsD6L+BUcjJTvDlowOsSLvOpU0XTtaIZBwGEm5o22Z1dncL3f3Dg6jTt+vpVAgDQRTXEL/ld/QP9TjprOgCQqFoJxpJIJmMgpo7+kaFSICn6v5x9yRdWhXy4JTCJ8kwQM5oG06WUsp6iQdTU1kGhwfWRSOSW/vM9Sw698jKdWTi5qlJExtiCeCxWBUBAba1dzFAoDcIfDAIAjLyD9ESiFHiKkdkvT47FkzBNAmfYQD5biu62ZZfKFFyQAJjFvFwMV4fva7i9YZnKkt9qatr0brHGedVoJOecdHf/xgGAeCwmA/gYwETh4EplrnTPKXSfi8PqPQ1iuuFMBokSmBlNQ/cHJ/DW8SMY+ugMtJFkCcRS9M5noRtGKX0saKVQoEGecHW4oaa27pn2jvY7CCH5jjc7xNnQytnkkXZhwQ6ANyhVPqaUEgC8YrwPdiqBk+5aHDrRhxMXOH6lixhKpkrz0xMJpOIJxNxLYGAJ/rnj1zj6018ALt/ldCg9dukQBQllPgmMMV6gWqxQMK5va9srN25stFtaWq4OIFtaWgghBAcPvuoFEAZQodBgebFWaOfGockLsaFqAU5/cAb/2vEL3OQ2IOdTJRqUynLklq8D3GV4fs8+nP7gDI4n1GlUSfTJcHQLg4kspIBS0kouSAhXhwUAjqZr5QVS/l5z8zaNcy7ORvF3NoAkgxfOEQCcMXU1gBpKlRGVJX8G4FMAIiEKDyqTvvKJjXfiiY13wkcF2LlLRHxRmQhffw/EvIF77u3DutvW4oE/vQ/pkQEYeadk2u6KIKysgdGBeKlKpOkadDYCOSAX/eUfUEq/8fWvNUkAHM75577vWWP8kUhEqKqqrALgbW7edv7QKy/fE77+xv2yaFd4Pj1t+6gguhUKvywjo2lInD4BaeFKyJVln+k9jm7hl0MWbG6hZsW6EpijydFiBcnUdE0qmPhjDRsaftze0e5q3NiYv2rqkcUm14ED+29VaHAvpXQ9Y8wJxd4hVXXLSZHKpCcSSKoalq28YVowmZp729ZktPbLk5qsDvRfRoVUXlaqHBU1s6CReTkgS6PJ0e8dP3L8G62trfbUNHbeZjbFpv6xY8c827ZtvQPAd3KGcTtAHEopQeIiKS+XIXonibYxOozFdbUY8NUj6NJhToxCGx6Cl06mkB4RcLsEOKIEmwM2B7hhI59Nl34DAPLDE8h6A4AowbRMyAEZpmUCAJckSeAOH1+4cGH7ihUrMjfeeIN4+PBrfF4HGwCktbUV0WjUALAMgJcxNQlAIJY+zQoslYGxJAb6JyAZCdhZDaNpG3YqAUtlsLPatIxnBJWTCw+4p2lkeiIBOzeO4MCHkEV7ZjUdAIgckNPh6rDBOScPP/zI59qGmBVCXmzWt7XtdSs0+NN4LJagVGkF8IWkbvGQqZcO0K1QMEvE6HuncWsihk+TDINyAPXWJDdUY33wB4OwC6AtkyezoMt8ZVqFndNwMeWgvFacatq8MGxN13oaNjRonHNxKp+dz5kNAYCbbr4ZjLFFlCqNCg1eJ3mWmGMjPaZgib4ahboc3UImZaB8/b1IBXuQDPmAMBDIEyRdHGJ5OYT89P3mbExyyRm+1B8MYrAviTEhhGqfNLUn6wBwabo2xBj7OQB0vNlBGjc2XhWEnEciEbLhixvyKkuOA+gFMGrmhj0AypSA12WpDELAjbHKNZADMlbdtB5CqBblS9cgXLca5UvXIEFCOG+HcMFWLstmZipkJpnkzBLhURY56azJi/2djJnhABzG2GtnP+r5Jedc6Hyv08Hn3P+etTLa8ePHOedceOKJv9EPH37t/bvuvLOLp5MaN41YKD9W5i5TaOeAydXECDFtglQ6Ba/Xi9GxUaTSKQiigKyRQyKZQkpLQ1BHoQQVzPCv3MkZlhrvtXlGEz/hQZvICwhAhHgshpyRzWTSuqQy9ukn52N/9+STOwc3Nm50bX50sz0rJjibEolEhNbWVkIIsQ/v2SGdHin3NIVGt4tLav5Rc5U7fSO906zCwBJ4MQwA6PhwGHeHlFJG83TzfdOCi5NWoToizusyHDPFXQuWEcZUB5M3MwQALkoVANjZ1LTpuba2vdLg4JA1G5nNnPQzOOfk4MFXhYcf3uQQAt67fXO9tXrxe6F1t5anJxIO3uoSrTo/3H2ZafO6RB981/nQ8eEwvnLHl/CVtaW2hK3G+ojqiPm4U/EOgD0TWu5PKFXWMqaeqqmt3ayypJcx9QKAXQBeHBwcMmezo+iaCyALxNd2TewQOf+u88o3my+sdMiRMpU94KRVnr9OhmfpLXAqL1V/8kOncduSGoieCtzZvGHauaQnEjYAiafG3zLOffL4o7tevLj/pRdisNJJAH8Uj8WWAvgJgKPNzdvOTVGaWbtgNed3ZJ76ll945jsZp3t3873wl/1YLA/ZAETRU0E8BkdWyEOQ3DDHzkEsD5VqliXTzzt5a3yAcDWpEcfZWr+j7eC+nVu9j+560QTg7H/pBWXTlsd1APkZe5zV6yvCXAP59LczHAA+7vzZz9MO+QkAl+ipyMmVZcgKefgcFzwGL1GaqXzTyDvcSascOVNUs9bbu06xI5xzcuMN/2O38BZEIhFh05bHVQB5zrn49a81iVN45KyKa66BBAGyTymC75kLye6G1Mt2it+TNy6KwC0WADcApEdOAsEF06al4gnOuWraOc3DkuwCgH/7/g8OTGxcv0R68PETFsgJXgxuU5KCObtEJVwBHPm3xe3gnJO6sVePcEPfRxxHMuMnTJ/j4lkhD/jLIHpKlwS4kXfsvDFg2KmECzkzp/jc37397186fvb5xz3iu/9hg1wCLBqNOoWozOd4X1dEyPn/fEm4/v4tdvfu5nVpb/m/h3qG11h1fq3b7fUtFSWhqm65UyDajp1KCNzQ3YVK9/M9otSa/SSb22BnyYrnfmRhHsiV/EcA6d7dLNTvaLO7dzc/wHJ226AcCAEwbqpd6fK6BJIevigiZwrc0AHgNwB+SLyBPe6zIxny5buE6+/fMi9AvNJA4vCeHWK9ZQh1Y6/yvpq/2soN/SniDVResmk9icnGWQeAN1ZPvPCrfemtZIOdFeaLJs4LIAFg386tLvdtd/MjHa+LO2+mf8hy9lepR/SynD2i+NwfEcc5UZ9cHENrq9O9u9l94gLnj+56MY9rcrn0bt98KejVtHi7dzfL3bubS5dEW+6+29W7fbO0b+dW8Rpa/4808vCeHa4ZAIv7dm51z/xb3XwU17zxMYRwDtiH9+wQs59k0Ssv5tdHo86KWboZcU3mqfwvsD5tAkX7DRoAAAAASUVORK5CYII="
const NOISE = "url(data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22140%22%20height=%22140%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.85%22%20numOctaves=%222%22%20stitchTiles=%22stitch%22/%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url%28%23n%29%22%20opacity=%220.11%22/%3E%3C/svg%3E)"
const CSS = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
.apana-sim2,.apana-sim2 *{box-sizing:border-box;}
.apana-sim2 a{color:#cb2a7d;}
.apana-sim2 a:hover{color:#ff4fa3;}
@keyframes s2float{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-6px) rotate(2deg)}}
@keyframes s2note{0%{opacity:0;transform:translateY(3px) scale(.6)}25%{opacity:1}100%{opacity:0;transform:translateY(-16px) scale(1)}}
@keyframes s2halo{0%,100%{opacity:.45;transform:scale(1)}50%{opacity:.8;transform:scale(1.09)}}
@keyframes s2in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes s2pop{0%{transform:scale(.75);opacity:0}60%{transform:scale(1.12)}100%{transform:scale(1);opacity:1}}
@keyframes s2phrase{0%{opacity:0;transform:translate(-50%,6px)}16%{opacity:1}68%{opacity:1}100%{opacity:0;transform:translate(-50%,-30px)}}
@keyframes s2book{0%{opacity:0;transform:translateY(-12px) scaleX(.55)}60%{transform:translateY(0) scaleX(1.06)}100%{opacity:1;transform:none}}
@keyframes s2flow{to{stroke-dashoffset:-24}}
@keyframes s2scanx{0%{transform:translateX(-13px);opacity:.25}50%{opacity:1}100%{transform:translateX(13px);opacity:.25}}
@keyframes s2grow{from{width:0}to{width:100%}}
@keyframes s2cardpulse{0%,100%{box-shadow:0 2px 10px rgba(58,40,20,.08)}50%{box-shadow:0 3px 16px rgba(203,42,125,.24)}}
@keyframes s2tap{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
@keyframes s2cursor{50%{opacity:0}}
@keyframes s2dots{0%,100%{transform:translateY(0);opacity:.45}50%{transform:translateY(-4px);opacity:1}}
.apana-sim2 ::-webkit-scrollbar{height:0}
@media (max-width:620px){.apana-sim2{padding:18px 12px!important;margin:10px auto!important}.apana-sim2 h3{font-size:18px!important}}
@keyframes s2uncheck{0%,100%{box-shadow:0 0 0 0 rgba(224,132,78,.55)}50%{box-shadow:0 0 0 7px rgba(224,132,78,0)}}
@keyframes s2halo2{0%,100%{box-shadow:0 0 0 0 rgba(255,79,163,.55),0 0 8px 2px rgba(255,79,163,.4)}50%{box-shadow:0 0 0 9px rgba(255,79,163,0),0 0 20px 6px rgba(255,79,163,.75)}}
@keyframes s2fall{0%{transform:translateY(-36px) rotate(0deg);opacity:0}25%{opacity:1}70%{transform:translateY(3px) rotate(58deg)}100%{transform:translateY(0) rotate(50deg)}}
@keyframes s2confetti{0%{transform:translateY(-20px) rotate(0deg);opacity:1}100%{transform:translateY(230px) rotate(540deg);opacity:.9}}
@keyframes s2bip{0%,100%{opacity:.3;box-shadow:0 0 0 0 currentColor}50%{opacity:1;box-shadow:0 0 6px 1px currentColor}}
@keyframes s2drip{0%{transform:translateY(0) scaleY(.4);opacity:0}20%{opacity:1}100%{transform:translateY(20px) scaleY(1.1);opacity:.9}}
@keyframes s2puddle{0%{transform:translateX(-50%) scaleX(.2);opacity:.2}100%{transform:translateX(-50%) scaleX(1);opacity:.6}}
@keyframes s2over{0%{transform:translateX(-50%) scaleY(0);opacity:0}100%{transform:translateX(-50%) scaleY(1);opacity:1}}
@keyframes s2enterR{0%{opacity:0;transform:translateX(80px) scale(.8)}55%{opacity:1;transform:translateX(0) scale(.94)}100%{transform:translateX(0) scale(1)}}
@keyframes s2enterL{0%{opacity:0;transform:translateX(-80px) scale(.8)}55%{opacity:1;transform:translateX(0) scale(.94)}100%{transform:translateX(0) scale(1)}}
@keyframes s2hop{0%{transform:translateY(0)}25%{transform:translateY(-17px)}50%{transform:translateY(0)}66%{transform:translateY(-6px)}100%{transform:translateY(0)}}`

if (typeof window !== "undefined" && !window.ApanaSimKit) {
  /* Apana — boîte à outils partagée des simulateurs pédagogiques IA.
     Logique métier réutilisable (tirage, ajustement, échantillonnage),
     reprise et généralisée depuis le simulateur n°1.
     Chargée en <helmet> ; expose window.ApanaSimKit. */
  (function () {
    // Tire une option au hasard, pondérée par son champ .p
    function weighted(opts) {
      var tot = 0, k;
      for (k = 0; k < opts.length; k++) tot += opts[k].p;
      var x = Math.random() * tot, acc = 0;
      for (k = 0; k < opts.length; k++) {
        acc += opts[k].p;
        if (x <= acc) return opts[k];
      }
      return opts[opts.length - 1];
    }
  
    // Réajuste des probabilités par un exposant (exp>1 = plus tranché,
    // exp<1 = plus dispersé) et renormalise en pourcentages entiers.
    function adjustP(options, exp) {
      var out = [], sum = 0, i;
      for (i = 0; i < options.length; i++) {
        var w = Math.pow(options[i].p, exp);
        out.push({ t: options[i].t, tru: options[i].tru, p: w });
        sum += w;
      }
      for (i = 0; i < out.length; i++) {
        out[i].p = Math.max(1, Math.round(out[i].p / sum * 100));
      }
      return out;
    }
  
    // Échantillonne n tirages pondérés et renvoie le décompte par libellé.
    function tally(options, n, exp) {
      var opts = exp && exp !== 1 ? adjustP(options, exp) : options;
      var counts = {};
      for (var i = 0; i < opts.length; i++) counts[opts[i].t] = 0;
      for (var j = 0; j < n; j++) counts[weighted(opts).t]++;
      return opts.map(function (o) { return { t: o.t, tru: !!o.tru, n: counts[o.t] }; });
    }
  
    function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  
    window.ApanaSimKit = {
      version: 1,
      weighted: weighted,
      adjustP: adjustP,
      tally: tally,
      clamp: clamp
    };
  })();
}

const SK = {"p":"position","l":"left","t":"top","r":"right","bt":"bottom","w":"width","h":"height","mw":"maxWidth","mh":"maxHeight","nw":"minWidth","nh":"minHeight","bg":"background","bgc":"backgroundColor","c":"color","br":"borderRadius","bd":"border","bdt":"borderTop","bdb":"borderBottom","bdl":"borderLeft","bdr":"borderRight","fs":"fontSize","fw":"fontWeight","ff":"fontFamily","lh":"lineHeight","lsp":"letterSpacing","ta":"textAlign","tt":"textTransform","tw":"textWrap","td":"textDecoration","d":"display","ai":"alignItems","jc":"justifyContent","fd":"flexDirection","fl":"flex","fwr":"flexWrap","asf":"alignSelf","g":"gap","pd":"padding","pdt":"paddingTop","pdb":"paddingBottom","pdl":"paddingLeft","pdr":"paddingRight","mg":"margin","mgt":"marginTop","mgb":"marginBottom","mgl":"marginLeft","mgr":"marginRight","ov":"overflow","ovx":"overflowX","ovy":"overflowY","z":"zIndex","op":"opacity","sh":"boxShadow","tf":"transform","tfo":"transformOrigin","tr":"transition","an":"animation","cur":"cursor","ws":"whiteSpace","ins":"inset","pe":"pointerEvents","us":"userSelect","gtc":"gridTemplateColumns","gtr":"gridTemplateRows","va":"verticalAlign","fst":"fontStyle","bx":"boxSizing","wbr":"wordBreak","ol":"outline","fsr":"flexShrink","fgr":"flexGrow","fb":"flexBasis","cl":"clipPath","fi":"filter","wc":"willChange","bkv":"backfaceVisibility"}, SV = {"abs":"absolute","rel":"relative","fix":"fixed","stk":"sticky","fx":"flex","ifx":"inline-flex","blk":"block","ib":"inline-block","grd":"grid","ctr":"center","sb":"space-between","sa":"space-around","se":"space-evenly","fe":"flex-end","fsr2":"flex-start","col":"column","nwr":"nowrap","pty":"pretty","bal":"balance","hid":"hidden","non":"none","up":"uppercase","pntr":"pointer","dflt":"default","P":"Poppins,sans-serif","GS":"Georgia,serif","wrp":"wrap","brk":"break-word","fs2":"flex-start"}, SU = ["fontWeight","zIndex","opacity","lineHeight","flex","flexShrink","flexGrow","order"];
function sty(str, extra) {
  const o = {};
  for (const part of str.split(';')) {
    if (!part) continue;
    const i = part.indexOf(':'), k = i < 0 ? part : part.slice(0, i), raw = i < 0 ? '' : part.slice(i + 1);
    const key = SK[k] || k;
    let v = SV[raw] !== undefined ? SV[raw] : raw;
    if (/^-?[\d.]+$/.test(v) && SU.indexOf(key) < 0) v += 'px';
    o[key] = v;
  }
  return extra ? Object.assign(o, extra) : o;
}
class Sim extends React.Component {
  state = { lang: 'fr', step: 0, maxReached: 0, dir: 1, tuto: true, eggN: 0, eggMsg: null,
    pre: { n: 0, si: 0, acc: 15, last: null, lastOk: true, phrase: null },
    ftTone: 'none', ftPhase: 'done', ftProg: 0,
    rlhfRound: 0, rlhfGood: 0, rlhfPick: null, rlhfRating: 0,
    ragOn: false, ragTouched: false, ragEx: 0, ragEx: 0, ragEx: 0, ragEx: 0, ragEx: 0, ragEx: 0, ragEx: 0, ragEx: 0, ragEx: 0, ragEx: 0, ragEx: 0,
    tool: false, toolTouched: false, robot: 0, toolEx: 0, toolTurn: 0, toolPopup: null, toolPlaying: false, toolTyped: '', toolThinking: false, narrow: (typeof window !== 'undefined' && window.innerWidth < 620), ragCelebrated: false, rlhfStreak: 0, rlhfSeed: Math.floor(Math.random() * 997) + 1, ragKeep: null, finished: false, introStarted: false, introDone: false, canStart: false, typed: '', trainConsent: true, privacyAck: false, privacyAsked: false, proChosen: false };
  componentDidMount() { if (this.props.lang === 'en' || this.props.lang === 'fr') this.setState({ lang: this.props.lang }); if (this.props.part === 2) this.setState({ step: 4, maxReached: 4, tuto: true }); this._robot = setInterval(() => this.setState(s => ({ robot: s.robot + 1 })), 760); if (this.props.part !== 2) this.startIntro(); this._onRz = () => { const nw = window.innerWidth < 620; if (nw !== this.state.narrow) this.setState({ narrow: nw }); }; window.addEventListener('resize', this._onRz); this._onRz(); }
  componentDidUpdate(prev) { if (prev.part !== this.props.part) { const p2 = this.props.part === 2; this.setState({ step: p2 ? 4 : 0, maxReached: p2 ? 4 : 0, tuto: true, dir: 1, finished: false, ragCelebrated: false }); if (!p2) requestAnimationFrame(() => this.startIntro()); } }
  componentWillUnmount() { ['_et', '_ft1', '_readyT', '_tt1', '_tt2', '_tt3'].forEach(k => { if (this[k]) clearTimeout(this[k]); }); if (this._ttype) clearInterval(this._ttype); if (this._onRz) window.removeEventListener('resize', this._onRz); if (this._robot) clearInterval(this._robot); if (this._typeT) clearInterval(this._typeT); }
  startIntro() { const w = this.T().welcome; const headline = String(w.intro).split('\n\n')[0]; if (this._typeT) clearInterval(this._typeT); if (this._readyT) clearTimeout(this._readyT); let seen = false; try { seen = !!localStorage.getItem('sim2seen'); } catch (e) {} if (seen) { this.setState({ introStarted: true, introDone: true, canStart: true, typed: headline }); return; } this.setState({ introStarted: true, introDone: false, canStart: false, typed: '' }); let i = 0; this._typeT = setInterval(() => { i++; this.setState({ typed: headline.slice(0, i) }); if (i >= headline.length) { clearInterval(this._typeT); this._typeT = null; this.setState({ introDone: true }); this._readyT = setTimeout(() => this.setState({ canStart: true }), 3000); } }, 45); }
  stopTools() { ['_tt1', '_tt2', '_tt3'].forEach(k => { if (this[k]) { clearTimeout(this[k]); this[k] = null; } }); if (this._ttype) { clearInterval(this._ttype); this._ttype = null; } }
  playTools() { const ex = this.T().tools.examples[this.state.toolEx]; this.stopTools(); this.setState({ toolPlaying: true, toolTouched: true, toolTurn: 0, toolThinking: false, toolTyped: '' }); this._tt3 = setTimeout(() => this.toolStep(0, ex), 350); }
  toolStep(k, ex) { if (k >= ex.turns.length) { this.setState({ toolPlaying: false, toolTyped: '' }); return; }
    const msg = ex.turns[k].u; let i = 0; this.setState({ toolTyped: '' });
    if (this._ttype) clearInterval(this._ttype);
    this._ttype = setInterval(() => { i++; this.setState({ toolTyped: msg.slice(0, i) });
      if (i >= msg.length) { clearInterval(this._ttype); this._ttype = null;
        this._tt1 = setTimeout(() => { this.setState({ toolTurn: k + 1, toolThinking: true, toolTyped: '' });
          this._tt2 = setTimeout(() => { this.setState({ toolThinking: false });
            this._tt3 = setTimeout(() => this.toolStep(k + 1, ex), 1600); }, 1100); }, 420); } }, 26); }
  T() { return DATA[this.state.lang]; }
  kit() { return (typeof window !== 'undefined' && window.ApanaSimKit) || { weighted: a => a[0], adjustP: (o) => o }; }
  pLo() { return this.props.part === 2 ? 3 : 0; }
  pHi() { return this.props.part === 1 ? 2 : 4; }
  inPart(pi) { return pi >= this.pLo() && pi <= this.pHi(); }
  handoff() { const el = typeof window !== 'undefined' ? window.__apanaSim2P2 : null; if (el && el.getBoundingClientRect) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: 'smooth' }); }
  go(d) { const lo = this.props.part === 2 ? 4 : 0, hi = this.pHi() + 1; let s = this.state.step + d; if (s < lo) s = lo; if (s > hi) s = hi; this.setState({ step: s, dir: d > 0 ? 1 : -1, tuto: true, maxReached: Math.max(this.state.maxReached, s) }); }
  next() { if (this.state.step === 5) this.reset(); else if (this.props.part === 1 && this.state.step === 3) this.handoff(); else this.go(1); }
  enter(s) { if (!this.inPart(s - 1)) return; this.setState({ step: s, dir: s >= this.state.step ? 1 : -1, tuto: true }); }
  prev() { const st = this.state, lo = this.props.part === 2 ? 4 : 0; if (st.step <= lo) { if (!st.tuto) this.setState({ tuto: true, dir: -1 }); return; } if (!st.tuto) { this.setState({ tuto: true, dir: -1 }); return; } const s = st.step - 1; if (s <= 0) { this.setState({ step: 0, dir: -1 }); return; } this.setState({ step: s, tuto: false, dir: -1 }); }
  reset() { const p2 = this.props.part === 2; this.setState({ step: p2 ? 4 : 0, maxReached: p2 ? 4 : 0, dir: 1, tuto: true, pre: { n: 0, si: 0, acc: 15, last: null, lastOk: true, phrase: null }, ftTone: 'none', ftPhase: 'done', ftProg: 0, rlhfRound: 0, rlhfGood: 0, rlhfPick: null, rlhfRating: 0, toolTouched: false, toolEx: 0, toolTurn: 0, toolPopup: null, ragCelebrated: false, rlhfStreak: 0, rlhfSeed: Math.floor(Math.random() * 997) + 1, ragKeep: null, finished: false, introStarted: false, introDone: false, canStart: false, typed: '', trainConsent: true, privacyAck: false, privacyAsked: false, proChosen: false }); if (!p2) requestAnimationFrame(() => this.startIntro()); }
  interacted(pi) { const s = this.state; if (pi === 0) return s.pre.n >= 1; if (pi === 1) return s.ftTone !== null && s.ftTone !== 'none'; if (pi === 2) return s.rlhfRound >= 1; if (pi === 3) return s.ragKeep != null; if (pi === 4) return s.toolTouched; return true; }  goalMet(pi) { const s = this.state; if (pi === 0) return s.pre.n >= 5; if (pi === 1) return s.ftPhase === 'done' && s.ftTone !== 'none'; if (pi === 2) return s.rlhfRound >= 3; return false; }

  train() { const T = this.T(), s = this.state.pre; if (s.n >= 5) return; const idx = s.n % T.pre.sentences.length, exp = 0.6 + (s.n / 5) * 2.4, K = this.kit(), shaped = K.adjustP ? K.adjustP(T.pre.sentences[idx].cands, exp) : T.pre.sentences[idx].cands, p = K.weighted(shaped); this.setState({ pre: { n: s.n + 1, si: idx, last: p.t, lastOk: !!p.tru, phrase: T.pre.phrases[s.n % T.pre.phrases.length], acc: Math.min(90, s.acc + 16 + Math.round(Math.random() * 6)) } }); }
  tryLabel(n) { const k = n + 1; if (this.state.lang === 'fr') return '\u25b6 ' + (k === 1 ? '1er' : k + 'e') + ' essai'; const suf = k === 1 ? 'st' : k === 2 ? 'nd' : k === 3 ? 'rd' : 'th'; return '\u25b6 ' + k + suf + ' try'; }
  chooseFt(t) { if (this._ft1) clearTimeout(this._ft1); if (t === 'none') { this.setState({ ftTone: 'none', ftPhase: 'done', ftProg: 0 }); return; } this.setState({ ftTone: t, ftPhase: 'training', ftProg: 0 }); requestAnimationFrame(() => { if (this.state.ftPhase === 'training') this.setState({ ftProg: 100 }); }); this._ft1 = setTimeout(() => this.setState({ ftPhase: 'done' }), 1500); }

  pickRlhf(good, text) { if (this.state.rlhfRound >= 3 || this.state.rlhfPick) return; this.setState({ rlhfPick: { good: good, text: text } }); }
  rateRlhf(n) { if (!this.state.rlhfPick) return; this.setState({ rlhfRating: n }); }
  nextRlhf() { const p = this.state.rlhfPick; if (!p || !this.state.rlhfRating) return; this.setState({ rlhfRound: this.state.rlhfRound + 1, rlhfGood: this.state.rlhfGood + (p.good ? 1 : 0), rlhfPick: null, rlhfRating: 0, rlhfStreak: p.good ? this.state.rlhfStreak + 1 : 0 }); }
  resetRlhf() { this.setState({ rlhfRound: 0, rlhfGood: 0, rlhfPick: null, rlhfRating: 0, rlhfStreak: 0, rlhfSeed: Math.floor(Math.random() * 997) + 1 }); }

  popEgg() { const q = this.T().eggs; if (!q || !q.length) return; const i = this.state.eggN % q.length; if (this._et) clearTimeout(this._et); this.setState({ eggMsg: q[i], eggN: this.state.eggN + 1 }); this._et = setTimeout(() => this.setState({ eggMsg: null }), 3800); }
  einstein(size) {
    const h = React.createElement, msg = this.state.eggMsg;
    return h('div', { onClick: () => this.popEgg(), style: sty('p:rel;tr:transform .25s;fl:0 0 auto;d:fx;ai:ctr;jc:ctr;cur:pntr', { zIndex: msg ? 40 : 3, transform: msg ? 'translateY(-6px)' : 'none', width: (size + 40) + 'px', height: (size * 0.82) + 'px' }) }, [
      msg ? h('div', { key: 'egg', style: sty('p:abs;bt:100%;l:50%;tf:translateX(-50%);w:max-content;mw:240px;bg:#0c1b4b;c:#fff;ff:GS;fs:12.5px;lh:1.45;br:12px;pd:9px 13px;mgb:7px;sh:0 6px 18px rgba(12,27,75,.3);tw:pty;an:s2in .3s ease;z:41') }, [msg, h('div', { key: 'tail', style: sty('p:abs;t:100%;l:50%;tf:translateX(-50%) rotate(45deg);w:11px;h:11px;bg:#0c1b4b;mgt:-5px') })]) : null,
      h('div', { key: 'halo', style: sty('p:abs;br:50%;bg:radial-gradient(circle,#ffdcef 0%,rgba(255,220,239,0) 68%);an:s2halo 4.5s ease-in-out infinite', { width: size + 'px', height: size + 'px' }) }),
      h('span', { key: 'n', style: sty('p:abs;l:4px;t:6px;an:s2note 2.6s ease-in-out infinite', { fontSize: (size * 0.14) + 'px' }) }, '\ud83c\udfb5'),
      h('img', { key: 'i' + (msg ? this.state.eggN : 'x'), src: EINSTEIN, alt: 'Guide', style: sty('p:rel;h:auto;fi:drop-shadow(0 5px 9px rgba(58,40,20,.18))', { width: size + 'px', animation: (msg ? 's2hop .5s ease, ' : '') + 's2float 4.5s ease-in-out infinite' }) })
    ]);
  }
  card(kids, extra) { return React.createElement('div', { style: Object.assign({ background: '#fffdf8', border: '1px solid #ece0c8', borderRadius: '14px', padding: '18px 20px' }, extra || {}) }, kids); }

  stage(kids) { return React.createElement('div', { style: sty('p:rel;h:190px;w:100%;mw:380px;mg:0 auto 14px;bg:linear-gradient(180deg,#fffdf8,#f6efe0);bd:1px solid #eadfc8;br:12px;ov:hid') }, kids); }
  accPill(acc) { return acc ? React.createElement('div', { key: 'acc', style: sty('p:abs;r:10px;t:10px;bg:#fff0f7;bd:1px solid #ffc4e0;br:999px;pd:3px 10px;ff:P;fs:11px;fw:700;c:#cb2a7d;ws:nwr;z:6') }, acc) : null; }
  ped(y, zb, zc) { const h = React.createElement; return [
    h('div', { key: 'base', style: sty('p:abs;l:190px;bt:2px;tf:translateX(-50%);w:92px;h:20px;bg:radial-gradient(ellipse at center,#4a5058,#2f343b);br:50%', { zIndex: zb }) }),
    h('div', { key: 'col', style: sty('p:abs;l:190px;tf:translateX(-50%);w:30px;bg:linear-gradient(90deg,#454b53,#2f343b);br:8px', { top: (y - 4) + 'px', height: (188 - y) + 'px', zIndex: zc }) })]; }
  beamBox() { const h = React.createElement; return h('div', { key: 'sc', style: sty('p:rel;w:30px;h:28px;ov:hid;pe:non;z:5;mgl:2px') }, [h('div', { key: 'haze', style: sty('p:abs;ins:0;bg:linear-gradient(90deg,rgba(255,30,30,.16),rgba(255,30,30,0))') }), h('div', { key: 'beam', style: sty('p:abs;t:2px;bt:2px;l:50%;w:3px;br:2px;bg:rgba(255,30,30,.92);sh:0 0 8px 2px rgba(255,30,30,.8);an:s2scanx 1s ease-in-out infinite') })]); }
  binScan(lt, dt, pad) { const h = React.createElement; return h('div', { key: 'sc', style: sty('p:abs;ins:0;ov:hid;pe:non') }, [h('div', { key: 'ln', style: sty('p:abs;h:2px;bg:rgba(255,45,45,.4)', { top: lt + 'px', left: pad + 'px', right: pad + 'px' }) }), h('div', { key: 'dot', style: sty('p:abs;l:50%;mgl:-6px;w:12px;h:8px;br:2px;bg:rgba(255,30,30,.95);sh:0 0 8px 2px rgba(255,30,30,.85);an:s2scanx 1s ease-in-out infinite', { top: dt + 'px' }) })]); }
  confettiEls(n, sp) { const cols = ['#ff4fa3', '#ffd166', '#5ec97f', '#4d8bff', '#ff8fc4', '#cb2a7d']; return Array.from({ length: n }).map((_, i) => React.createElement('span', { key: i, style: sty('p:abs;t:0px;br:2px', { left: (3 + (i * sp) % 94) + '%', width: (6 + (i % 3) * 2) + 'px', height: (9 + (i % 3) * 3) + 'px', background: cols[i % cols.length], animation: 's2confetti ' + (1.6 + (i % 5) * 0.4) + 's ' + ((i % 7) * 0.18) + 's linear infinite' }) })); }
  pinkBtn(label, onClick, key, on) { return React.createElement('button', { key: key, onClick: onClick, style: sty('cur:pntr;d:ifx;ai:ctr;g:7px;ff:P;fs:13.5px;fw:600;br:999px;pd:11px 20px', { color: on === false ? '#cb2a7d' : '#fff', background: on === false ? '#fff0f7' : '#ff4fa3', border: '1px solid ' + (on === false ? '#ffc4e0' : '#ff4fa3'), boxShadow: on === false ? 'none' : '0 3px 10px rgba(255,79,163,.28)' }) }, label); }
  chip(v, tone) { const c = tone === 'green' ? { b: '#c8ecd4', t: '#14683a' } : (tone === 'red' ? { b: '#f6d5cd', t: '#9c2f1e' } : { b: '#ffe08a', t: '#5c4a12' }); return React.createElement('span', { style: sty('ff:GS;fw:700;pd:2px 9px;br:7px', { background: c.b, color: c.t }) }, v); }
  gauge(label, pct, key) {
    const h = React.createElement;
    return h('div', { key: key, style: {} }, [
      h('div', { key: 'l', style: sty('d:fx;jc:sb;mgb:6px;ff:P;fs:12px;fw:600;c:#6f6350') }, [h('span', { key: 'a' }, label), h('span', { key: 'b', style: sty('c:#14683a') }, pct + ' %')]),
      h('div', { key: 'g', style: sty('h:10px;bg:#f0e7d4;br:999px;ov:hid') }, h('div', { style: sty('h:100%;br:999px;bg:linear-gradient(90deg,#ffb84f,#c8ec6a,#5ec97f);tr:width .5s', { width: pct + '%' }) }))
    ]);
  }
  probaBars(cands) {
    const h = React.createElement;
    return h('div', { style: sty('d:grd;g:7px') }, cands.map((c, i) => { const hot = c.on;
      return h('div', { key: i, style: sty('d:fx;ai:ctr;g:10px') }, [
        h('span', { key: 'w', style: sty('ff:GS;fs:14px;w:78px;fl:0 0 auto', { fontWeight: hot ? 700 : 400, color: hot ? (c.bad ? '#9c2f1e' : '#14683a') : '#2a2320' }) }, c.t),
        h('div', { key: 'g', style: sty('fl:1 1 auto;nw:30px;h:14px;bg:#f0e7d4;br:999px;ov:hid') }, h('div', { style: sty('h:100%;br:999px;tr:width .35s', { width: c.p + '%', background: hot ? (c.bad ? 'linear-gradient(90deg,#e08a76,#f0b3a6)' : 'linear-gradient(90deg,#5ec97f,#8fd9a8)') : '#d9c9a8' }) })),
        h('span', { key: 'p', style: sty('ff:P;fs:11.5px;fw:600;c:#6f6350;w:34px;ta:right') }, c.p + '\u00a0%')
      ]); }));
  }

  renderWelcome(T) {
    const h = React.createElement, w = T.welcome, s = this.state, L = s.lang === 'en';
    const parts = String(w.intro).split('\n\n'), headline = parts[0], body = parts.slice(1).join('\n\n');
    const typed = s.introStarted ? s.typed : '', ready = s.canStart;
    return h('div', { style: sty('d:fx;fd:col;ai:ctr;ta:ctr;pd:16px 0 8px') }, [
      this.einstein(80),
      h('div', { key: 'b', style: sty('mw:480px;bg:#fff;bd:1px solid #ece0c8;br:16px;pd:18px 22px;mg:10px 0 2px;sh:0 2px 8px rgba(58,40,20,.06)') }, [
        h('div', { key: 'hl', style: sty('ff:GS;fs:20px;fw:700;c:#2a2320;lh:1.3;nh:26px;tw:pty') }, [typed, !s.introDone ? h('span', { key: 'cur', style: sty('d:ib;w:2px;h:19px;bg:#ff4fa3;mgl:2px;va:-3px;an:s2cursor 1s step-end infinite') }) : null]),
        s.introDone ? h('div', { key: 'bd', style: sty('mgt:12px;ff:GS;fs:15px;lh:1.6;c:#4a4038;ws:pre-line;tw:pty;an:s2in .4s ease') }, body) : null
      ]),
      h('button', { key: 'c', disabled: !ready, onClick: () => { if (ready) { try { localStorage.setItem('sim2seen', '1'); } catch (e) {} this.go(1); } }, style: sty('mgt:16px;ff:P;fs:15px;fw:600;c:#fff;bd:non;br:12px;pd:13px 26px;tr:background .4s, box-shadow .4s', { cursor: ready ? 'pointer' : 'default', background: ready ? '#ff4fa3' : '#e4c9d5', boxShadow: ready ? '0 4px 14px rgba(255,79,163,.32)' : 'none' }) }, ready ? w.cta : (s.introDone ? (L ? 'A moment…' : 'Un instant…') : w.cta))
    ]);
  }

  leadFor(T, pi) { return pi === 0 ? (this.state.pre.n >= 5 ? T.pre.leadDone : T.pre.lead) : (pi === 1 ? T.ft.lead : (pi === 2 ? T.rlhf.lead : (pi === 3 ? T.use.lead : T.tools.intro))); }
  renderOverview(T, pi) {
    const h = React.createElement, n = T.phases.length, shades = ['#e78bad', '#d5688f', '#bd4d78', '#9c3a63', '#6e1246'], pct = (pi + 0.5) / n * 100, ready = T.ready[pi];
    const nw = this.state.narrow;
    const ava = nw ? null : h('div', { key: 'a', style: sty('p:abs;t:0;tf:translateX(-50%);tr:left .55s cubic-bezier(.34,1.3,.5,1);w:54px;ta:ctr;z:4', { left: 'calc(' + pct + '%)' }) }, [
      h('span', { key: 'n', style: sty('p:abs;l:-2px;t:0;fs:11px;an:s2note 2.4s ease-in-out infinite') }, '\ud83c\udfb5'),
      h('img', { key: 'i' + pi, src: EINSTEIN, alt: '', style: sty('w:42px;h:auto;an:s2float 4s ease-in-out infinite, s2hop .6s ease;fi:drop-shadow(0 4px 7px rgba(58,40,20,.18))') })
    ]);
    const shadesA2 = { 3: '#e3a24e', 4: '#cf8531' };
    const chev = T.phases.map((p, i) => { const done = (i + 1) <= this.state.maxReached, cur = i === pi, off = !this.inPart(i);
      const firstA2 = p.act === 2 && i > 0 && T.phases[i - 1].act === 1;
      const reachedBg = p.act === 2 ? shadesA2[i] : shades[i];
      const clip = i === 0 ? 'polygon(0 0, calc(100% - 13px) 0, 100% 50%, calc(100% - 13px) 100%, 0 100%)' : 'polygon(0 0, calc(100% - 13px) 0, 100% 50%, calc(100% - 13px) 100%, 0 100%, 13px 50%)';
      return h('button', { key: i, onClick: off ? undefined : () => this.enter(i + 1), title: off ? '' : p.label, style: sty('nw:0;bd:non;bg:transparent;pd:0', { cursor: off ? 'default' : 'pointer', opacity: off ? 0.42 : 1, flex: nw ? '0 0 116px' : '1 1 0', marginLeft: i ? (firstA2 ? '4px' : '-8px') : 0, zIndex: cur ? 3 : 1 }) },
        h('div', { style: sty('h:56px;d:fx;fd:col;ai:ctr;jc:ctr;g:1px;tr:background .4s', { borderRadius: i === 0 ? '11px' : '0', padding: '0 5px 0 ' + (i ? '13px' : '9px'), color: done ? '#fff' : (cur ? '#cb2a7d' : '#b3a583'), background: done ? reachedBg : '#efe4d2', clipPath: clip, boxShadow: cur ? (p.act === 2 ? '0 4px 12px rgba(221,133,26,.3)' : '0 4px 12px rgba(203,42,125,.28)') : 'none' }) }, [
          h('div', { key: 'l', style: sty('ff:P;fs:11.5px;fw:700;lh:1.1;ta:ctr') }, p.label),
          h('div', { key: 's', style: sty('ff:P;fs:9px;op:.9;lh:1.1;ta:ctr') }, p.sub)
        ]));
    });
    const endReached = this.state.maxReached >= 5;
    const endChev = this.props.part === 1 ? null : h('button', { key: 'end', onClick: () => { this.setState({ step: 5, dir: 1, tuto: false, finished: true, maxReached: Math.max(this.state.maxReached, 5) }); }, title: this.state.lang === 'en' ? 'End' : 'Fin', style: sty('fl:0 0 58px;nw:0;cur:pntr;bd:non;bg:transparent;pd:0;mgl:-8px;z:2') },
      h('div', { style: sty('h:56px;d:fx;ai:ctr;jc:ctr;pd:0 4px 0 13px;cl:polygon(0 0, calc(100% - 13px) 0, 100% 50%, calc(100% - 13px) 100%, 0 100%, 13px 50%);tr:background .4s', { color: endReached ? '#fff' : '#b3a583', background: endReached ? '#3fae63' : '#efe4d2' }) }, h('span', { style: sty('ff:P;fs:11px;fw:700;lsp:.04em') }, this.state.lang === 'en' ? 'End' : 'Fin')));
    const finalBlock = h('div', { key: 'fb' }, [
      h('div', { key: 'eb', style: sty('ff:P;fs:10.5px;lsp:.12em;tt:up;c:#cb2a7d;fw:700;mgb:6px') }, this.state.lang === 'en' ? 'Final test' : 'Test final'),
      h('div', { key: 'tt', style: sty('d:fx;ai:ctr;g:9px;fwr:wrp;ff:GS;fw:700;lh:1.1;mgb:9px', { fontSize: this.state.narrow ? '18px' : '22px' }) }, [h('span', { key: 'a', style: sty('c:#cb2a7d') }, 'LLM'), h('span', { key: 'p1', style: sty('c:#c3b492') }, '+'), h('span', { key: 'b', style: sty('c:#14683a') }, 'RAG'), h('span', { key: 'p2', style: sty('c:#c3b492') }, '+'), h('span', { key: 'c', style: sty('c:#b47e16') }, this.state.lang === 'en' ? 'Tools' : 'Outils')]),
      h('div', { key: 'p', style: sty('ff:GS;fs:15px;lh:1.5;c:#4a4038;tw:pty') }, T.tools.intro)
    ]);
    const tu2 = T.tuto[pi], onDemo = this.state.tuto;
    const oy = pi >= 3, obg = !onDemo ? '#dfeaf7' : (oy ? '#fbe1d0' : '#e5d3f2'), otop = obg, obd = !onDemo ? '#b6cde6' : (oy ? '#eec1a3' : '#c6a9e2');
    const bubInner = (!onDemo && pi === 4) ? finalBlock : (onDemo ? h('div', { key: 'ov' }, [
      tu2 && tu2.intro ? h('div', { key: 'in', style: sty('ff:P;fs:12px;fw:700;c:#cb2a7d;mgb:8px;tw:pty') }, tu2.intro) : null,
      h('div', { key: 'dl', style: sty('ff:P;fs:10px;lsp:.08em;tt:up;c:#a8946e;fw:700;mgb:5px') }, T.defnLbl),
      h('div', { key: 'dt', style: sty('ff:GS;fs:14.5px;lh:1.5;c:#4a4038;tw:pty') }, tu2 ? (tu2.term ? [h('strong', { key: 't', style: sty('c:#2a2320') }, tu2.term), ' ' + tu2.defn] : tu2.defn) : '')
    ]) : this.leadFor(T, pi));
    const bubble = h('div', { key: 'b', style: sty('p:rel;mgt:15px;br:14px;pd:12px 16px;ff:GS;fs:15px;lh:1.5;tw:pty;sh:0 2px 6px rgba(58,40,20,.05)', { background: obg, border: '1px solid ' + obd }) }, [
      h('div', { key: 't', style: sty('p:abs;t:-7px;tf:translateX(-50%) rotate(45deg);w:13px;h:13px;tr:left .55s cubic-bezier(.34,1.3,.5,1)', { left: 'calc(' + pct + '%)', background: otop, borderLeft: '1px solid ' + obd, borderTop: '1px solid ' + obd }) }),
      bubInner
    ]);
    const equip = (this.state.ragCelebrated ? 50 : 0) + (this.state.toolTouched ? 50 : 0), eqEn = this.state.lang === 'en';
    const barTrack = (child) => h('div', { style: sty('fl:1 1 70px;nw:56px;h:9px;bg:rgba(255,255,255,.14);br:999px;ov:hid;sh:inset 0 1px 2px rgba(0,0,0,.25)') }, child);
    const trainSeg = h('div', { key: 'ts', style: sty('fl:1 1 150px;d:fx;ai:ctr;g:8px') }, [
      h('span', { key: 'l', style: sty('ff:P;fs:9px;lsp:.1em;tt:up;c:#ffb3d6;fw:700;fl:0 0 auto') }, T.readyLbl),
      barTrack(h('div', { style: sty('h:100%;bg:linear-gradient(90deg,#ff8fc4,#ff4fa3 70%,#ff2f92);br:999px;tr:width .6s;sh:0 0 8px rgba(255,79,163,.55)', { width: ready + '%' }) })),
      h('span', { key: 'v', style: sty('ff:P;fw:700;fs:13px;c:#fff;fl:0 0 auto') }, ready + ' %')
    ]);
    const potSeg = pi >= 3 ? h('div', { key: 'ps', style: sty('fl:1 1 150px;d:fx;ai:ctr;g:8px') }, [
      h('span', { key: 'l', style: sty('ff:P;fs:9px;lsp:.1em;tt:up;c:#ffcf8a;fw:700;fl:0 0 auto') }, eqEn ? 'AI potential' : 'Potentiel IA'),
      barTrack(h('div', { style: sty('h:100%;bg:linear-gradient(90deg,#ffca6a,#ff9e2c);br:999px;tr:width .6s;sh:0 0 8px rgba(255,158,44,.5)', { width: equip + '%' }) })),
      h('span', { key: 'v', style: sty('ff:P;fw:700;fs:13px;c:#fff;fl:0 0 auto') }, equip + ' %')
    ]) : null;
    const band = h('div', { key: 'ready', style: sty('mgb:14px;bg:linear-gradient(115deg,#0a1740 0%,#152a63 55%,#2a3f86 100%);br:12px;pd:10px 16px;d:fx;ai:ctr;g:12px;fwr:wrp;sh:inset 0 1px 0 rgba(255,255,255,.06)') }, [
      nw ? null : h('span', { key: 'same', style: sty('ff:P;fs:10px;fw:700;c:#ffd9ec;bg:rgba(255,255,255,.12);br:999px;pd:4px 10px;fl:0 0 auto') }, '🧠 ' + T.sameAI),
      trainSeg,
      potSeg ? h('div', { key: 'dv', style: sty('w:1px;asf:stretch;nh:20px;bg:rgba(255,255,255,.22);fl:0 0 auto') }) : null,
      potSeg
    ]);
    const actLine = nw ? null : h('svg', { key: 'actline', width: 15, height: 56, viewBox: '0 0 15 56', style: sty('p:abs;t:42px;l:calc((100% - 58px) * 0.6 + 2px);tf:translateX(-50%);z:5;pe:non') }, h('polyline', { points: '3,4 13,28 3,52', fill: 'none', stroke: '#a8946e', strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
    return h('div', null, [band, h('div', { key: 'stage', style: sty('p:rel', { paddingTop: nw ? '6px' : '42px' }) }, [ava, h('div', { key: 'r', style: sty('d:fx', { overflowX: nw ? 'auto' : 'visible', paddingBottom: nw ? '4px' : 0, WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }) }, chev.concat([endChev])), actLine, bubble])]);
  }

  renderPre(T) {
    const h = React.createElement, d = T.pre, s = this.state.pre, MAX = 5;
    const exp = 0.6 + (s.n / 5) * 2.4, base = d.sentences[s.si].cands, K = this.kit(), shaped = K.adjustP ? K.adjustP(base, exp) : base, target = (base.find(c => c.tru) || base[0]).t;
    const cands = shaped.map(c => Object.assign({}, c, { on: s.last === c.t, bad: s.last === c.t && !c.tru }));
    const COLORS = ['#e0729b', '#e3a94a', '#c9578f', '#d99a3f', '#b8608f', '#5b82c4'];
    const BH = 20;
    const books = h('div', { key: 'left', style: sty('fl:0 0 156px;nw:134px;p:rel;d:fx;fd:col;ai:ctr;jc:fe;nh:196px') }, [
      s.phrase ? h('div', { key: 'ph-' + s.n, style: sty('p:abs;l:50%;w:150px;ta:ctr;ff:GS;fs:12.5px;fw:600;fst:italic;c:#8a3d67;an:s2phrase 3s ease-out forwards;pe:non;z:5', { bottom: (34 + s.n * (BH + 4) + 8) + 'px' }) }, '\u00ab ' + s.phrase + ' \u00bb') : null,
      h('div', { key: 'stack', style: sty('d:fx;fd:column-reverse;ai:ctr;g:4px;mgb:3px') }, Array.from({ length: s.n }).map((_, k) => { const w = 92 + (k % 3) * 12, col = COLORS[k % COLORS.length];
        return h('div', { key: k, style: sty('p:rel;br:2px 4px 4px 2px;sh:0 2px 4px rgba(58,40,20,.18);d:fx;ai:ctr', { width: w + 'px', height: BH + 'px', background: 'linear-gradient(180deg,' + col + ',rgba(0,0,0,.16))', backgroundColor: col, animation: k === s.n - 1 ? 's2book .45s ease' : 'none' }) }, [
          h('div', { key: 'sp', style: sty('p:abs;l:5px;t:3px;bt:3px;w:3px;br:2px;bg:rgba(255,255,255,.55)') }),
          h('div', { key: 'pg', style: sty('p:abs;r:0;t:2px;bt:2px;w:5px;br:0 3px 3px 0;bg:repeating-linear-gradient(180deg,#fffdf8,#fffdf8 1px,#e6dcc6 1px,#e6dcc6 2px)') }),
          h('div', { key: 'ti', style: sty('mgl:14px;h:3px;br:2px;bg:rgba(255,255,255,.5)', { width: (w * 0.4) + 'px' }) })
        ]); })),
      h('div', { key: 'shelf', style: sty('w:128px;h:7px;br:3px;bg:linear-gradient(180deg,#d8c19a,#b89b6a);sh:0 2px 4px rgba(58,40,20,.2)') }),
      h('div', { key: 'cap', style: sty('ff:P;fs:11px;c:#a8946e;fw:600;mgt:9px') }, s.n + ' / ' + MAX + ' ' + d.booksLbl)
    ]);
    const maxed = s.n >= MAX;
    const btn = maxed
      ? h('button', { key: 'b', onClick: () => this.next(), style: sty('cur:pntr;ff:P;fs:13.5px;fw:600;c:#fff;bg:linear-gradient(90deg,#5ec97f,#3fae63);bd:non;br:999px;pd:11px 20px;sh:0 3px 10px rgba(63,174,99,.32);an:s2pop .4s ease') }, d.nextCta)
      : this.pinkBtn(this.tryLabel(s.n), () => this.train(), 'b');
    const right = h('div', { key: 'right', style: sty('fl:1 1 300px;nw:0') }, [
      h('div', { key: 'sent', style: sty('ff:GS;fs:17px;mgb:5px;ta:ctr') }, d.sentences[s.si].s + ' ', h('span', { key: 'x', style: sty('d:ib;nw:78px;ta:ctr;fw:700;pd:2px 11px;br:8px', { border: '2px dashed ' + (s.last ? 'transparent' : '#d3c09a'), background: s.last ? (s.lastOk ? '#c8ecd4' : '#f6d5cd') : 'transparent', color: s.last ? (s.lastOk ? '#14683a' : '#9c2f1e') : '#b3a583', animation: s.last ? 's2pop .4s ease' : 'none' }) }, s.last || '?')),
      h('div', { key: 'tg', style: sty('ta:ctr;ff:P;fs:11px;c:#6f6350;mgb:11px') }, d.targetLbl + ' \u00ab ' + target + ' \u00bb'),
      h('div', { key: 'pb', style: sty('mgb:11px') }, this.probaBars(cands)),
      s.last ? h('div', { key: 'cmp', style: sty('ta:ctr;ff:GS;fs:13px;fw:600;mgb:11px;an:s2in .3s ease', { color: s.lastOk ? '#14683a' : '#9c2f1e' }) }, (s.lastOk ? '\u2713 ' : '\u2717 ') + (s.lastOk ? d.rightMsg : d.wrongMsg)) : null,
      h('div', { key: 'row', style: sty('d:fx;jc:ctr;mgb:14px') }, [btn]),
      this.gauge(d.accLbl, s.acc, 'acc')
    ]);
    return this.card([h('div', { key: 'cols', style: sty('d:fx;g:18px;fwr:wrp;ai:stretch') }, [books, right])]);
  }

  renderFt(T) {
    const h = React.createElement, d = T.ft, tone = this.state.ftTone, phase = this.state.ftPhase, prog = this.state.ftProg || 0;
    const td = tone && tone !== 'none' ? d.tones.find(t => t.id === tone) : null, ans = td ? td.answer : d.raw;
    const toggle = [{ id: 'none', label: d.rawLbl }].concat(d.tones.slice(0, 2).map(t => ({ id: t.id, label: t.label })));
    const seg = h('div', { key: 'seg', style: sty('d:fx;fwr:wrp;g:6px;bg:#f0e7d4;br:12px;pd:4px;mgb:16px') }, toggle.map(t => { const on = tone === t.id;
      return h('button', { key: t.id, onClick: () => this.chooseFt(t.id), style: sty('cur:pntr;fl:1 1 auto;ff:P;fs:13px;fw:600;bd:non;br:9px;pd:9px 12px;tr:background .2s', { color: on ? '#fff' : '#6f6350', background: on ? '#ff4fa3' : 'transparent', boxShadow: on ? '0 2px 6px rgba(255,79,163,.25)' : 'none' }) }, t.label);
    }));
    let body;
    if (phase === 'training') body = h('div', { key: 'tr', style: sty('bg:#fffdf8;bd:1px solid #ece0c8;br:13px;pd:18px 17px') }, [
      h('div', { key: 'l', style: sty('d:fx;ai:ctr;g:8px;ff:P;fs:13px;fw:600;c:#cb2a7d;mgb:11px') }, [h('span', { key: 'i', style: sty('fs:15px') }, '\u2699\ufe0f'), d.trainLbl]),
      h('div', { key: 'b', style: sty('h:12px;bg:#f0e7d4;br:999px;ov:hid') }, h('div', { style: sty('h:100%;br:999px;bg:linear-gradient(90deg,#ff7cbf,#ff4fa3);tr:width 1.4s ease', { width: prog + '%' }) })),
      h('div', { key: 's', style: sty('ff:P;fs:11.5px;c:#8a7c62;mgt:9px;tw:pty') }, d.trainSub)
    ]);
    else if (phase === 'done') body = h('div', { key: 'an-' + tone, style: sty('an:s2in .35s ease') }, [
      h('div', { key: 'a', style: sty('bg:#fff;br:13px;pd:14px 16px;ff:GS;fs:15px;lh:1.55;tw:pty', { border: '1px solid ' + (td ? '#bfe3cd' : '#ece0c8'), color: td ? '#2a2320' : '#8a7c62' }) }, [h('span', { key: 'r' }, '\ud83e\udd16  '), ans.pre, this.chip(d.fact, 'flat'), ans.post]),
      td ? h('div', { key: 'ex', style: sty('mgt:11px') }, [h('div', { key: 'l', style: sty('ff:P;fs:10.5px;lsp:.04em;tt:up;c:#a8946e;fw:700;mgb:7px') }, d.learnedFrom), h('div', { key: 'list', style: sty('d:fx;fd:col;g:6px') }, td.examples.map((e, i) => h('div', { key: i, style: sty('ff:GS;fs:12.5px;fst:italic;c:#6f6350;lh:1.4;tw:pty') }, '\u201c' + e + '\u201d')))]) : null,
      h('div', { key: 'c', style: sty('ff:P;fs:12px;fw:600;mgt:9px;tw:pty', { color: td ? '#14683a' : '#8a7c62' }) }, td ? d.toneCap : d.rawCap)
    ]);
    else body = h('div', { key: 'raw0', style: sty('an:s2in .3s ease') }, [
      h('div', { key: 'a', style: sty('bg:#fff;bd:1px solid #ece0c8;br:13px;pd:14px 16px;ff:GS;fs:15px;lh:1.55;c:#8a7c62;tw:pty') }, [h('span', { key: 'r' }, '\ud83e\udd16  '), d.raw.pre, this.chip(d.fact, 'flat'), d.raw.post]),
      h('div', { key: 'c', style: sty('ff:P;fs:12px;c:#8a7c62;fw:600;mgt:9px;tw:pty') }, d.rawCap),
      h('div', { key: 'h', style: sty('ff:GS;fs:13.5px;fst:italic;c:#cb2a7d;mgt:10px;tw:pty') }, d.hint)
    ]);
    return this.card([seg, body]);
  }

  renderRlhf(T) {
    const h = React.createElement, d = T.rlhf, round = this.state.rlhfRound, good = this.state.rlhfGood, align = Math.max(0, Math.min(100, Math.round(50 + (2 * good - round) * 17)));
    const kids = [];
    if (round < 3) {
      const perm = [[0, 1, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0], [0, 2, 1], [1, 0, 2]][this.state.rlhfSeed % 6];
      const ri = perm[round], r = d.rounds[ri], goodLeft = ((this.state.rlhfSeed + round) % 2) === 0;
      const roundEmoji = ['📦', '📈', '💰'][ri] || '';
      const A = { o: goodLeft ? r.good : r.bad, g: goodLeft, id: 'A' };
      const B = { o: goodLeft ? r.bad : r.good, g: !goodLeft, id: 'B' };
      const pick = this.state.rlhfPick, rating = this.state.rlhfRating;
      const streak = this.state.rlhfStreak;
      kids.push(h('div', { key: 'mascot', style: sty('d:fx;ai:ctr;g:10px;mgb:12px;fwr:wrp') }, [
        h('span', { key: 'b', style: sty('ff:P;fs:11.5px;fw:600;c:#6f6350') }, (d.alignLbl || 'Bon sens') + ' : ' + align + ' %'),
        streak >= 2 ? h('span', { key: 's', style: sty('ff:P;fs:11px;fw:700;c:#dd851a;bg:#fff3d6;bd:1px solid #eed9a8;br:999px;pd:3px 9px;an:s2pop .35s ease') }, '🔥 ' + (d.streak || 'Série') + ' ×' + streak) : null
      ]));
      kids.push(h('div', { key: 'ask', style: sty('d:fx;g:9px;ai:fsr2;mgb:10px;fwr:wrp') }, [
        h('span', { key: 'l', style: sty('fl:0 0 auto;ff:P;fs:10px;fw:700;lsp:.06em;tt:up;c:#cb2a7d;bg:#fff0f7;bd:1px solid #ffc4e0;br:999px;pd:4px 10px') }, d.asks + ' ' + (round + 1) + '/3'),
        h('span', { key: 'q', style: sty('fl:1 1 200px;ff:GS;fs:15.5px;lh:1.5;c:#2a2320;tw:pty') }, '« ' + r.q + ' »')
      ]));
      kids.push(h('div', { key: 'hn', style: sty('d:fx;ai:fsr2;g:6px;mgb:13px;ff:P;fs:11px;c:#8a7c62;tw:pty') }, [h('span', { key: 'i', style: sty('fs:13px;fl:0 0 auto') }, '👤'), d.humanNote]));
      if (!pick) {
        kids.push(h('div', { key: 'cl', style: sty('ff:P;fs:12.5px;fw:700;c:#cb2a7d;mgb:9px') }, d.chooseLbl));
        const optCard = (side) => h('button', { key: side.id, onClick: () => this.pickRlhf(side.g, side.o.text), style: sty('cur:pntr;fl:1 1 200px;nw:0;ta:left;d:fx;fd:col;g:8px;bg:#fffdf8;bd:1.5px solid #e3d8c2;br:14px;pd:13px 15px;sh:0 2px 10px rgba(58,40,20,.08);an:s2cardpulse 2.2s ease-in-out infinite;tr:transform .15s, box-shadow .15s, border-color .15s'), 'style-hover': { borderColor: '#cb2a7d', background: '#fff', transform: 'translateY(-3px)', boxShadow: '0 8px 20px rgba(203,42,125,.2)' } }, [
          h('div', { key: 'tg', style: sty('d:fx;jc:sb;ai:ctr;g:8px') }, [h('span', { key: 'a', style: sty('ff:P;fs:10px;fw:700;lsp:.05em;tt:up;c:#a8946e') }, (d.optLbl || 'Réponse') + ' ' + side.id), h('span', { key: 'e', style: sty('fs:18px;fl:0 0 auto') }, roundEmoji)]),
          h('div', { key: 't', style: sty('ff:GS;fs:14.5px;lh:1.5;c:#2a2320;tw:pty') }, side.o.text),
          h('div', { key: 'cta', style: sty('d:ifx;ai:ctr;g:6px;asf:fsr2;ff:P;fs:11.5px;fw:700;c:#cb2a7d;bg:#fff0f7;bd:1px solid #ffc4e0;br:999px;pd:5px 11px') }, [h('span', { key: 'h', style: sty('an:s2tap 1.2s ease-in-out infinite') }, '👆'), (this.state.lang === 'en' ? 'Choose' : 'Choisir')])
        ]);
        kids.push(h('div', { key: 'opts', style: sty('d:fx;g:12px;fwr:wrp;ai:stretch;mgb:14px') }, [optCard(A), optCard(B)]));
      } else {
        kids.push(h('div', { key: 'chosen', style: sty('bg:#fff;br:14px;pd:13px 15px;mgb:13px;an:s2in .3s ease', { border: '1.5px solid ' + (pick.good ? '#bfe3cd' : '#f2cfc6') }) }, [
          h('div', { key: 'k', style: sty('ff:P;fs:10px;fw:700;lsp:.05em;tt:up;c:#a8946e;mgb:6px') }, d.keptLbl),
          h('div', { key: 't', style: sty('ff:GS;fs:15px;lh:1.5;c:#2a2320;tw:pty') }, pick.text)
        ]));
        kids.push(h('div', { key: 'rl', style: sty('d:fx;ai:baseline;g:8px;fwr:wrp;mgb:7px') }, [h('span', { key: 'a', style: sty('ff:P;fs:12.5px;fw:700;c:#cb2a7d') }, d.rateLbl), h('span', { key: 'b', style: sty('ff:P;fs:11px;fw:600', { color: rating ? '#14683a' : '#c58aa8' }) }, rating ? (rating + '/5 · ' + (d.rateOk || 'bien vu')) : ('↳ ' + (d.rateReq || 'note obligatoire')))]));
        const okPick = pick.good;
        kids.push(h('div', { key: 'srow', style: sty('d:fx;ai:ctr;g:12px;fwr:wrp;mgb:13px') }, [
          h('div', { key: 'stars', style: sty('d:fx;ai:ctr;g:5px;fl:0 0 auto') }, [1, 2, 3, 4, 5].map(n => h('button', { key: n, onClick: () => this.rateRlhf(n), style: sty('cur:pntr;bd:non;bg:non;pd:2px;fs:28px;lh:1', { color: n <= rating ? '#f0a93c' : '#d9c9a8' }) }, n <= rating ? '★' : '☆'))),
          rating ? h('div', { key: 'fb', style: sty('fl:1 1 220px;nw:0;d:fx;ai:fsr2;g:9px;br:11px;pd:10px 13px;an:s2in .3s ease', { background: okPick ? '#f1faf4' : '#fdf2ef', border: '1px solid ' + (okPick ? '#bfe3cd' : '#f2cfc6') }) }, [
            h('span', { key: 'i', style: sty('fs:18px;fl:0 0 auto') }, okPick ? '✅' : '❌'),
            h('span', { key: 't', style: sty('ff:GS;fs:13.5px;lh:1.5;tw:pty', { color: okPick ? '#14683a' : '#9c2f1e' }) }, okPick ? d.fbGood : (d.fbBad + ' (' + r.bad.flaw + ').'))
          ]) : null
        ]));
        kids.push(h('div', { key: 'nx', style: sty('d:fx;jc:ctr;mgb:14px') }, [rating ? this.pinkBtn(round === 2 ? (d.seeResult || 'Voir le résultat →') : (d.nextRound || 'Cas suivant →'), () => this.nextRlhf(), 'n') : h('button', { key: 'nd', disabled: true, style: sty('cur:not-allowed;ff:P;fs:13.5px;fw:600;c:#bcae93;bg:#eee3cf;bd:non;br:999px;pd:11px 20px') }, round === 2 ? (d.seeResult || 'Voir le résultat →') : (d.nextRound || 'Cas suivant →'))]));
      }
    } else {
      if (good === 3) { const cfc = ['#ff4fa3', '#ffd166', '#5ec97f', '#4d8bff', '#ff8fc4']; kids.push(h('div', { key: 'cf', style: sty('p:rel;h:0') }, Array.from({ length: 18 }).map((_, i) => h('span', { key: i, style: sty('p:abs;t:0px;w:7px;h:11px;br:2px', { left: (5 + (i * 5.3) % 90) + '%', background: cfc[i % cfc.length], animation: 's2confetti ' + (1.5 + (i % 4) * 0.4) + 's ' + ((i % 6) * 0.15) + 's linear infinite' }) })))); }
      kids.push(h('div', { key: 'final', style: sty('br:13px;pd:15px 17px;mgb:14px;an:s2in .35s ease', { background: good >= 2 ? '#f1faf4' : '#fdf2ef', border: '1px solid ' + (good >= 2 ? '#bfe3cd' : '#f2cfc6') }) }, [
        h('div', { key: 'r', style: sty('fs:17px;mgb:8px') }, '🤖'),
        h('div', { key: 't', style: sty('ff:GS;fs:15px;lh:1.55;tw:pty', { color: good >= 2 ? '#14683a' : '#9c2f1e' }) }, good >= 2 ? d.finalAns : d.finalBad)
      ]));
      kids.push(h('div', { key: 'reWrap', style: sty('mgb:14px') }, [this.pinkBtn(d.reBtn, () => this.resetRlhf(), 're', false)]));
    }
    kids.push(this.gauge(d.alignLbl, align, 'al'));
    const glowC = align >= 67 ? '#5ec97f' : (align >= 40 ? '#f0b84a' : '#e0844a');
    return this.card(kids, { boxShadow: '0 0 0 2px ' + glowC + ', 0 0 22px 3px ' + glowC + '66', transition: 'box-shadow .5s' });
  }

  renderUse(T) {
    const h = React.createElement, d = T.use, L = this.state.lang === 'en';
    const exs = d.examples;
    const exi = Math.min(this.state.ragEx || 0, exs.length - 1), ex = exs[exi];
    const mem = ex.memAns, rag = ex.ragAns, keep = this.state.ragKeep;
    const useGlow = keep === 'rag' ? '#5ec97f' : (keep === 'mem' ? '#e0844a' : null);
    const answerCol = (opts) => h('div', { key: opts.key, onClick: () => this.setState({ ragKeep: opts.which }), style: sty('fl:1 1 240px;nw:0;cur:pntr;bg:#fff;br:14px;pd:15px 17px;d:fx;fd:col;g:12px;tr:border-color .2s, transform .15s, box-shadow .15s', { border: '2px solid ' + (keep === opts.which ? opts.tag.t : opts.bd), transform: keep === opts.which ? 'translateY(-2px)' : 'none', boxShadow: keep === opts.which ? '0 6px 18px rgba(58,40,20,.13)' : '0 2px 8px rgba(58,40,20,.06)' }) }, [
      h('div', { key: 'hdr', style: sty('d:fx;ai:ctr;jc:sb;g:8px') }, [
        h('span', { key: 'tag', style: sty('ff:P;fs:10px;fw:700;lsp:.06em;tt:up;br:999px;pd:4px 10px', { color: opts.tag.t, background: opts.tag.bg, border: '1px solid ' + opts.tag.bd }) }, opts.tag.label),
        h('button', { key: 'chk', onClick: () => this.setState({ ragKeep: opts.which }), style: sty('cur:pntr;fl:0 0 auto;d:ifx;ai:ctr;g:6px;bg:non;bd:non;pd:0;ff:P;fs:11px;fw:600', { color: keep === opts.which ? opts.tag.t : '#8a7c62' }) }, [
          L ? 'Trust' : 'Je m’y fie',
          h('span', { key: 'b', style: sty('w:18px;h:18px;br:50%;c:#fff;fs:11px;d:ifx;ai:ctr;jc:ctr;fl:0 0 auto', { border: '2px solid ' + (keep === opts.which ? opts.tag.t : '#c9b79a'), background: keep === opts.which ? opts.tag.t : 'transparent' }) }, keep === opts.which ? '✓' : '')
        ])
      ]),
      h('div', { key: 'r', style: sty('d:fx;g:10px;ai:fsr2') }, [h('span', { key: 'i', style: sty('fs:19px;fl:0 0 auto') }, '🤖'), h('div', { key: 't', style: sty('ff:GS;fs:16px;lh:1.5;tw:pty', { color: opts.text, fontWeight: opts.bold ? 700 : 400 }) }, opts.ans.text)]),
      opts.foot
    ]);
    const memFoot = h('div', { key: 'bad', style: sty('d:ifx;ai:ctr;g:6px;bg:#fdf2ef;bd:1px solid #f2cfc6;br:9px;pd:7px 11px;ff:P;fs:11.5px;fw:600;c:#9c2f1e;tw:pty') }, mem.badge);
    const ragFoot = h('div', { key: 'src', style: sty('d:fx;fwr:wrp;g:9px;ai:ctr') }, [h('span', { key: 's', style: sty('d:ifx;ai:ctr;g:6px;bg:#f1faf4;bd:1px solid #bfe3cd;br:9px;pd:7px 11px;ff:P;fs:11.5px;fw:600;c:#3c5a48') }, rag.source), h('span', { key: 'n', style: sty('ff:GS;fs:13px;c:#14683a;fw:600;tw:pty') }, rag.note)]);
    const toggle = exs.length > 1 ? h('div', { key: 'sw', style: sty('d:fx;g:8px;mgb:14px;fwr:wrp') }, exs.map((e, i) => { const on = i === exi; return h('button', { key: i, onClick: () => this.setState({ ragEx: i }), style: sty('cur:pntr;fl:0 1 auto;ff:P;fs:12.5px;fw:700;br:999px;pd:8px 14px', { border: '1.5px solid ' + (on ? '#ff4fa3' : '#e3d8c2'), background: on ? '#fff0f7' : '#fffdf8', color: on ? '#cb2a7d' : '#6f6350' }) }, e.who); })) : null;
    const verdict = keep ? h('div', { key: 'vd', style: sty('mgt:14px;d:fx;ai:fsr2;g:9px;br:11px;pd:11px 13px;an:s2in .3s ease', { background: keep === 'rag' ? '#f1faf4' : '#fdf2ef', border: '1px solid ' + (keep === 'rag' ? '#bfe3cd' : '#f2cfc6') }) }, [h('span', { key: 'i', style: sty('fs:18px;fl:0 0 auto') }, keep === 'rag' ? '✅' : '⚠️'), h('span', { key: 't', style: sty('ff:GS;fs:13.5px;lh:1.5;tw:pty', { color: keep === 'rag' ? '#14683a' : '#9c2f1e' }) }, keep === 'rag' ? (L ? 'Good reflex: you trust the up-to-date source.' : 'Bon réflexe : vous vous fiez à la source à jour.') : (L ? 'Careful: memory may be outdated · prefer the up-to-date source.' : 'Attention : la mémoire peut être périmée, préférez la source à jour.'))]) : null;
    return this.card([
      toggle,
      h('div', { key: 'q', style: sty('d:fx;g:9px;ai:fsr2;mgb:15px;fwr:wrp') }, [h('span', { key: 'l', style: sty('fl:0 0 auto;ff:P;fs:10px;fw:700;lsp:.06em;tt:up;c:#cb2a7d;bg:#fff0f7;bd:1px solid #ffc4e0;br:999px;pd:4px 10px') }, d.youLbl), h('span', { key: 'q', style: sty('ff:GS;fs:15px;c:#2a2320;tw:pty') }, ex.q)]),
      h('div', { key: 'cols', style: sty('d:fx;g:14px;fwr:wrp;ai:stretch') }, [
        answerCol({ key: 'mem', which: 'mem', bd: '#f2cfc6', text: '#2a2320', bold: false, ans: mem, foot: memFoot, tag: { label: d.memBtn + ' · ' + d.memSub, t: '#9c2f1e', bg: '#fdf2ef', bd: '#f2cfc6' } }),
        answerCol({ key: 'rag', which: 'rag', bd: '#bfe3cd', text: '#14683a', bold: true, ans: rag, foot: ragFoot, tag: { label: d.ragBtn + ' · ' + d.ragSub, t: '#14683a', bg: '#f1faf4', bd: '#bfe3cd' } })
      ]),
      verdict
    ], useGlow ? { boxShadow: '0 0 0 2px ' + useGlow + ', 0 0 22px 3px ' + useGlow + '66', transition: 'box-shadow .5s' } : { transition: 'box-shadow .5s' });
  }

  renderTools(T) {
    const h = React.createElement, d = T.tools, ex = d.examples[this.state.toolEx], turn = this.state.toolTurn, pop = this.state.toolPopup;
    const setEx = (i) => { this.stopTools(); this.setState({ toolEx: i, toolTurn: 0, toolPopup: null, toolPlaying: false, toolTyped: '', toolThinking: false }); };
    const toggles = h('div', { key: 'tg', style: sty('d:ifx;g:3px;mgb:13px;bg:#f0e7d4;bd:1px solid #e3d8c2;br:999px;pd:3px') }, d.examples.map((e, i) => { const on = this.state.toolEx === i;
      return h('button', { key: i, onClick: () => setEx(i), title: e.role, style: sty('cur:pntr;d:ifx;ai:ctr;g:5px;ff:P;fs:12.5px;fw:700;bd:non;br:999px;pd:6px 13px;ws:nwr;tr:all .2s', { color: on ? '#cb2a7d' : '#8a7c62', background: on ? '#fffdf8' : 'transparent', boxShadow: on ? '0 1px 4px rgba(58,40,20,.14)' : 'none' }) }, e.who); }));
    const revealed = ex.turns.slice(0, turn);
    const bubbles = [];
    revealed.forEach((tn, i) => {
      bubbles.push(h('div', { key: 'u' + i, style: sty('asf:fe;mw:86%;bg:#ff4fa3;c:#fff;ff:GS;fs:14px;lh:1.5;br:14px 14px 4px 14px;pd:9px 13px') }, tn.u));
      const links = (tn.links || []).map((lk, li) => h('a', { key: li, onClick: (e) => { e.preventDefault(); this.setState({ toolPopup: lk }); }, href: '#', style: sty('d:ifx;ai:ctr;g:4px;td:underline;ff:P;fs:12.5px;fw:600;mgr:12px;cur:pntr', { color: lk.kind === 'fiche' ? '#14683a' : '#2a4fd7' }) }, [lk.label, h('span', { key: 'a', style: sty('fs:10px') }, '\u2197')]));
      const usedTool = (tn.links || []).some(function (l) { return l.kind !== 'fiche'; });
      const isLast = i === revealed.length - 1;
      if (isLast && this.state.toolThinking) { bubbles.push(h('div', { key: 'th' + i, style: sty('asf:fsr2;d:fx;g:8px;ai:fe') }, [
        h('span', { key: 'av', style: sty('fl:0 0 auto;w:26px;h:26px;br:50%;bg:#fff0f7;bd:1px solid #ffc4e0;d:ifx;ai:ctr;jc:ctr;fs:14px') }, '\ud83e\udd16'),
        h('div', { key: 'd', style: sty('bg:#fff;bd:1px solid #ece0c8;br:14px 14px 14px 4px;pd:13px 15px;d:fx;g:5px') }, [0, 1, 2].map(n => h('span', { key: n, style: sty('w:7px;h:7px;br:50%;bg:#e3b7cd', { animation: 's2dots 1.1s ' + (n * 0.16) + 's ease-in-out infinite' }) })))
      ])); return; }
      bubbles.push(h('div', { key: 'a' + i, style: sty('asf:fsr2;d:fx;g:8px;ai:fe;mw:92%') }, [
        h('span', { key: 'av', style: sty('fl:0 0 auto;w:26px;h:26px;br:50%;bg:#fff0f7;bd:1px solid #ffc4e0;d:ifx;ai:ctr;jc:ctr;fs:14px') }, '\ud83e\udd16'),
        h('div', { key: 'b', style: sty('bg:#fff;bd:1px solid #ece0c8;br:14px 14px 14px 4px;pd:10px 13px') }, [
          h('div', { key: 't', style: sty('ff:GS;fs:14px;lh:1.55;c:#2a2320;tw:pty') }, tn.a),
          usedTool ? h('div', { key: 'ut', style: sty('d:ifx;ai:ctr;g:5px;mgt:8px;bg:#eaf7ef;bd:1px solid #bfe3cd;br:999px;pd:3px 9px;ff:P;fs:10.5px;fw:700;c:#14683a') }, [h('span', { key: 'i', style: sty('fs:11px') }, '🔧'), d.usedTool]) : null,
          links.length ? h('div', { key: 'lk', style: sty('mgt:9px;pdt:8px;bdt:1px dashed #ece0c8;d:fx;fwr:wrp;ai:ctr', { rowGap: '6px' }) }, links.concat(isLast && tn.point ? [h('span', { key: 'ein', style: sty('d:ifx;ai:ctr;g:4px;an:s2pop .4s ease') }, [h('img', { key: 'i', src: EINSTEIN, alt: '', style: sty('w:30px;h:auto;an:s2float 3s ease-in-out infinite') }), h('span', { key: 'c', style: sty('ff:P;fs:11px;fw:700;c:#cb2a7d') }, d.pointHere)])] : [])) : null
        ])
      ]));
    });
    const done = turn >= ex.turns.length;
    const L2 = this.state.lang === 'en';
    let sendBtn;
    if (done) {
      sendBtn = h('button', { key: 'end', onClick: () => this.setState({ finished: true }), style: sty('cur:pntr;w:100%;d:ifx;ai:ctr;g:10px;jc:ctr;ff:P;fs:16px;fw:700;c:#fff;bg:linear-gradient(90deg,#5ec97f,#3fae63);bd:non;br:14px;pd:17px 24px;sh:0 6px 20px rgba(63,174,99,.38);an:s2halo2 2s ease-in-out infinite') }, [h('span', { key: 'i', style: sty('fs:18px') }, '\u2705'), (L2 ? 'See the result →' : 'Voir le résultat →')]);
    } else if (!this.state.toolPlaying) {
      sendBtn = h('div', { key: 'play', style: sty('d:fx;fd:col;ai:ctr;g:10px;pd:6px 0 4px') }, [
        h('button', { key: 'b', onClick: () => { if (!this.state.privacyAck) this.setState({ privacyAsked: true }); else this.playTools(); }, style: sty('cur:pntr;w:76px;h:76px;br:50%;bd:non;bg:linear-gradient(135deg,#ff6fb5,#ff2f93);d:ifx;ai:ctr;jc:ctr;sh:0 8px 22px rgba(255,79,163,.4);an:s2halo2 2s ease-in-out infinite') }, h('svg', { width: 30, height: 30, viewBox: '0 0 24 24', fill: '#fff' }, h('path', { d: 'M8 5.5v13l11-6.5z' }))),
        h('div', { key: 'l', style: sty('ff:P;fs:13px;fw:700;c:#cb2a7d') }, turn > 0 ? (L2 ? 'Replay the conversation' : 'Rejouer la conversation') : (L2 ? 'Play the conversation' : 'Lancer la conversation')),
        h('div', { key: 's', style: sty('ff:GS;fs:12.5px;c:#8a7c62;ta:ctr;tw:pty') }, L2 ? 'It runs on its own · watch the assistant work.' : 'Elle se déroule toute seule · observez l’assistant travailler.')
      ]);
    } else {
      const icBtn = (kk, path) => h('span', { key: kk, style: sty('d:ifx;c:#9a9aa8') }, h('svg', { width: 19, height: 19, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, path));
      const nextTool = (((ex.turns[turn] || {}).links) || []).find(function (l) { return l.kind !== 'fiche'; });
      sendBtn = h('div', { key: 'composer', style: sty('w:100%;bg:#2b2c33;br:18px;pd:12px 12px 10px') }, [
        h('div', { key: 'q', style: sty('ff:GS;fs:15px;fw:700;c:#fff;pd:4px 6px 12px;tw:pty;nh:20px') }, [this.state.toolTyped, h('span', { key: 'cur', style: sty('d:ib;w:2px;h:17px;bg:#ff8fc4;mgl:2px;va:-3px;an:s2cursor 1s step-end infinite') })]),
        h('div', { key: 'row', style: sty('d:fx;ai:ctr;g:13px') }, [
          icBtn('plus', [h('line', { key: 1, x1: 12, y1: 5, x2: 12, y2: 19 }), h('line', { key: 2, x1: 5, y1: 12, x2: 19, y2: 12 })]),
          icBtn('globe', [h('circle', { key: 1, cx: 12, cy: 12, r: 9 }), h('path', { key: 2, d: 'M3 12h18' }), h('path', { key: 3, d: 'M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18' })]),
          icBtn('cursor', [h('path', { key: 1, d: 'M5 4l6 15 2-6 6-2z' })]),
          icBtn('tune', [h('line', { key: 1, x1: 4, y1: 8, x2: 20, y2: 8 }), h('line', { key: 2, x1: 4, y1: 16, x2: 20, y2: 16 }), h('circle', { key: 3, cx: 9, cy: 8, r: 2 }), h('circle', { key: 4, cx: 15, cy: 16, r: 2 })]),
          h('span', { key: 'pill', style: sty('d:ifx;ai:ctr;g:6px;mw:230px;ff:P;fs:12px;fw:600;br:999px;pd:5px 11px', { background: nextTool ? '#2f4633' : '#3a3b45', color: nextTool ? '#bfe3cd' : '#d7d5e2' }) }, [h('span', { key: 'i', style: sty('fs:12px') }, nextTool ? '🔧' : '🔭'), h('span', { key: 'l', style: sty('ov:hid;ws:nwr', { textOverflow: 'ellipsis' }) }, nextTool ? nextTool.label : 'Sources'), h('span', { key: 'x', style: sty('op:.55') }, '×')]),
          h('span', { key: 'sp', style: sty('fl:1') }),
          h('button', { key: 'go', style: sty('fl:0 0 auto;w:38px;h:38px;br:50%;bg:#fff;bd:non;d:ifx;ai:ctr;jc:ctr') }, h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: '#1c1a17', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' }, [h('line', { key: 1, x1: 12, y1: 19, x2: 12, y2: 5 }), h('polyline', { key: 2, points: '6 11 12 5 18 11' })]))
        ])
      ]);
    }
    const chat = h('div', { key: 'chat', style: sty('bg:#faf4e7;bd:1px solid #eadfc8;br:14px;pd:14px;d:fx;fd:col;g:10px;mgb:10px;nh:360px') }, bubbles.concat([h('div', { key: 'sp', style: sty('fl:1 1 auto') }), h('div', { key: 'ctl', style: sty('mgt:2px') }, [sendBtn])]));
    const kids = [toggles, chat];
    if (!this.state.privacyAck) {
      const dp = T.priv, poff = this.state.trainConsent === false;
      if (this.state.privacyAsked && !this.state.privacyAck) kids.push(h('div', { key: 'privov', style: sty('p:fix;ins:0;z:60;bg:rgba(12,27,75,.5);d:fx;ai:ctr;jc:ctr;pd:18px;an:s2in .25s ease') }, [
        h('div', { key: 'c', onClick: (e) => e.stopPropagation(), style: sty('p:rel;w:100%;mw:480px;mh:90vh;ov:auto;bg:#fffdf8;bd:1px solid #e3d8c2;br:18px;pd:20px 22px;sh:0 18px 55px rgba(12,27,75,.45)') }, [
          h('div', { key: 'ein', style: sty('d:fx;ai:ctr;g:12px;mgb:11px') }, [
            h('div', { key: 'im', style: sty('p:rel;fl:0 0 auto') }, [h('img', { key: 'i', src: EINSTEIN, alt: '', style: sty('w:52px;h:auto;fi:drop-shadow(0 3px 6px rgba(58,40,20,.2))') }), h('span', { key: 'f', style: sty('p:abs;r:-5px;bt:-3px;fs:18px') }, '😟')]),
            h('div', { key: 'hd', style: sty('fl:1;nw:0') }, [
              h('div', { key: 'eb', style: sty('d:fx;ai:ctr;g:7px;ff:P;fs:10.5px;lsp:.12em;tt:up;c:#9c2f1e;fw:700;mgb:5px') }, [h('span', { key: 'i' }, '🔒'), dp.eyebrow]),
              h('div', { key: 't', style: sty('ff:GS;fs:19px;fw:700;c:#2a2320;lh:1.25;tw:pty') }, [dp.title + ' ', h('span', { key: 'r', style: sty('c:#c0342b') }, dp.titleRed)])
            ])
          ]),
          h('div', { key: 'b', style: sty('ff:GS;fs:14px;lh:1.55;c:#4a4038;tw:pty') }, dp.body),
          h('button', { key: 'tg', onClick: () => this.setState({ trainConsent: !this.state.trainConsent }), style: sty('cur:pntr;w:100%;ta:left;d:fx;ai:fsr2;g:12px;mgt:15px;br:13px;pd:13px 15px;tr:all .3s', { background: poff ? '#eaf7ef' : '#fdf2ef', border: '1.5px solid ' + (poff ? '#bfe3cd' : '#f2cfc6') }) }, [
            h('span', { key: 'cb', style: sty('fl:0 0 auto;w:23px;h:23px;br:7px;d:ifx;ai:ctr;jc:ctr;fs:14px;c:#fff;fw:700', { border: '2px solid ' + (poff ? '#5ec97f' : '#cf6a4e'), background: poff ? '#fff' : '#e0846a', animation: (poff || this.state.proChosen) ? 'none' : 's2uncheck 1.4s ease-out infinite' }) }, poff ? '' : '✓'),
            h('span', { key: 'tx', style: sty('nw:0') }, [h('span', { key: 'l', style: sty('d:blk;ff:P;fs:13px;fw:700;c:#2a2320') }, dp.toggleLabel), h('span', { key: 'h', style: sty('d:blk;mgt:3px;ff:GS;fs:12px;tw:pty', { color: poff ? '#3c5a48' : '#8a7c62' }) }, poff ? dp.okMsg : dp.toggleHint)])
          ]),
          h('div', { key: 'or', style: sty('ta:ctr;ff:P;fs:10.5px;fw:700;lsp:.14em;c:#b3a583;mg:13px 0 3px') }, dp.orLbl),
          h('button', { key: 'pro', onClick: () => this.setState({ proChosen: !this.state.proChosen }), style: sty('cur:pntr;ta:left;w:100%;br:13px;pd:14px 16px;tr:all .25s', { background: this.state.proChosen ? '#efe6fa' : '#f7f1fa', border: '2px solid ' + (this.state.proChosen ? '#a877d6' : '#c8a6e6') }) }, [
            h('div', { key: 'rb', style: sty('d:ifx;ai:ctr;g:5px;ff:P;fs:9.5px;fw:700;lsp:.1em;tt:up;c:#fff;bg:#8a5cc0;br:999px;pd:3px 9px;mgb:8px') }, dp.recoLbl),
            h('div', { key: 'pt', style: sty('d:fx;ai:ctr;g:8px') }, [h('span', { key: 'i', style: sty('fs:16px') }, '⭐'), h('span', { key: 't', style: sty('fl:1;ff:P;fs:13px;fw:700;c:#6e1246') }, dp.proTitle), h('span', { key: 'c', style: sty('ff:P;fs:10.5px;fw:700;br:999px;pd:3px 10px', { color: this.state.proChosen ? '#fff' : '#8a5cc0', background: this.state.proChosen ? '#8a5cc0' : '#ece0f5' }) }, this.state.proChosen ? ('✓ ' + dp.proChosenMsg) : dp.proCta)]),
            h('div', { key: 'pb', style: sty('mgt:6px;ff:GS;fs:13px;lh:1.5;c:#4a4038;tw:pty') }, dp.proBody),
            this.state.proChosen ? h('div', { key: 'feat', style: sty('d:fx;fwr:wrp;g:6px;mgt:11px;an:s2in .3s ease') }, (dp.proFeats || []).map(function (ftx, fi) { return h('span', { key: fi, style: sty('ff:P;fs:10.5px;fw:600;c:#6e1246;bg:#fff;bd:1px solid #e0d0ec;br:999px;pd:4px 10px') }, ftx); })) : null,
            this.state.proChosen ? h('div', { key: 'dpa', style: sty('mgt:10px;pdt:10px;bdt:1px dashed #d9c2ec;ff:GS;fs:11.5px;lh:1.45;c:#6f6350;tw:pty') }, [h('strong', { key: 'k', style: sty('c:#6e1246') }, dp.dpaTerm + ' : '), dp.dpaDef]) : null
          ]),
          h('button', { key: 'cta', disabled: !(poff || this.state.proChosen), onClick: () => { if (poff || this.state.proChosen) { this.setState({ privacyAck: true, privacyAsked: false, trainConsent: false }); requestAnimationFrame(() => this.playTools()); } }, style: sty('w:100%;mgt:16px;ff:P;fs:14.5px;fw:700;c:#fff;bd:non;br:12px;pd:13px 20px;tr:all .3s', { cursor: (poff || this.state.proChosen) ? 'pointer' : 'default', background: (poff || this.state.proChosen) ? '#ff4fa3' : '#e4c9d5', boxShadow: (poff || this.state.proChosen) ? '0 4px 14px rgba(255,79,163,.32)' : 'none' }) }, dp.gateCta)
        ])
      ]));
    }
    if (pop) {
      const L = this.state.lang === 'en';
      const lines = String(pop.body || '').split('\n').map(s => s.trim()).filter(Boolean);
      const fields = lines.map(l => { const i = l.indexOf(':'); return i > 0 ? { k: l.slice(0, i).trim(), v: l.slice(i + 1).trim() } : { k: '', v: l }; });
      const numOf = (v) => { const s = String(v).replace(/[\s\u00a0]/g, ''); const m = s.match(/-?[0-9]+(?:[.,][0-9]+)?/); return m ? parseFloat(m[0].replace(',', '.')) : null; };
      const kv = fields.filter(x => x.k), notes = fields.filter(x => !x.k);
      const bars = kv.map(x => ({ k: x.k, v: x.v, n: numOf(x.v) })).filter(b => b.n != null && isFinite(b.n));
      const maxN = Math.max.apply(null, bars.map(b => Math.abs(b.n)).concat([1]));
      const inputCol = h('div', { key: 'in', style: sty('fl:1 1 190px;nw:0') }, [
        h('div', { key: 'l', style: sty('ff:P;fs:10px;lsp:.06em;tt:up;c:#8a7c62;fw:700;mgb:8px') }, L ? 'Inputs (pre-filled)' : 'Zone de saisie (pré-remplie)'),
        h('div', { key: 'fs', style: sty('d:fx;fd:col;g:8px') }, kv.map((x, i) => h('div', { key: i }, [
          h('div', { key: 'k', style: sty('ff:P;fs:10.5px;c:#8a7c62;fw:600;mgb:3px') }, x.k),
          h('div', { key: 'v', style: sty('bg:#fff;bd:1px solid #d9c9a8;br:8px;pd:7px 10px;ff:P;fs:12.5px;fw:600;c:#2a2320') }, x.v)
        ])))
      ]);
      const graphCol = h('div', { key: 'gr', style: sty('fl:1 1 150px;nw:0;bg:#fbf6ea;bd:1px solid #eadfc8;br:12px;pd:12px 13px') }, [
        h('div', { key: 'l', style: sty('ff:P;fs:10px;lsp:.06em;tt:up;c:#2a4fd7;fw:700;mgb:10px') }, L ? 'Preview' : 'Aperçu visuel'),
        bars.length ? h('div', { key: 'bs', style: sty('d:fx;fd:col;g:9px') }, bars.map((b, i) => h('div', { key: i }, [
          h('div', { key: 'r', style: sty('d:fx;jc:sb;g:8px;mgb:3px;ff:P;fs:10.5px;c:#4a4038') }, [h('span', { key: 'k', style: sty('fw:600;ov:hid;ws:nwr', { textOverflow: 'ellipsis' }) }, b.k), h('span', { key: 'v', style: sty('fl:0 0 auto;fw:700;c:#2a4fd7') }, b.v)]),
          h('div', { key: 't', style: sty('h:9px;bg:#e7ddca;br:999px;ov:hid') }, h('div', { style: sty('h:100%;br:999px;bg:linear-gradient(90deg,#6f8cf0,#2a4fd7)', { width: Math.max(6, Math.abs(b.n) / maxN * 100) + '%' }) }))
        ]))) : h('div', { key: 'ph', style: sty('ff:GS;fs:13px;c:#6f6350;lh:1.5;tw:pty') }, notes.length ? notes[0].v : pop.body)
      ]);
      kids.push(h('div', { key: 'pop', onClick: () => this.setState({ toolPopup: null }), style: sty('p:fix;ins:0;z:50;bg:rgba(12,27,75,.35);d:fx;ai:ctr;jc:ctr;pd:20px;an:s2in .2s ease') }, [
        h('div', { key: 'card', onClick: (e) => e.stopPropagation(), style: sty('w:100%;mw:460px;mh:86vh;ov:auto;bg:#fffdf8;bd:1px solid #e3d8c2;br:16px;pd:18px 20px;sh:0 12px 40px rgba(12,27,75,.28)') }, [
          h('div', { key: 'h', style: sty('d:fx;jc:sb;ai:fsr2;g:10px') }, [
            h('div', { key: 'ttl', style: sty('nw:0') }, [
              h('div', { key: 'eb', style: sty('ff:P;fs:10px;lsp:.1em;tt:up;c:#a8946e;fw:700;mgb:3px') }, (pop.kind === 'fiche') ? (L ? 'Field guide' : 'Fiche métier') : (L ? 'Tool sheet' : 'Fiche outil')),
              h('div', { key: 't', style: sty('ff:GS;fs:18px;fw:700;c:#2a4fd7;lh:1.2;tw:pty') }, pop.label)
            ]),
            h('button', { key: 'x', onClick: () => this.setState({ toolPopup: null }), style: sty('fl:0 0 auto;cur:pntr;bd:non;bg:non;fs:20px;c:#8a7c62;lh:1') }, '×')
          ]),
          (pop.kind === 'fiche') ? null : h('div', { key: 'tag', style: sty('d:ib;ff:P;fs:9.5px;fw:700;lsp:.06em;tt:up;c:#3fae63;bg:#eaf7ef;bd:1px solid #bfe3cd;br:999px;pd:3px 9px;mg:10px 0 14px') }, d.deterministicTag),
          (pop.kind === 'fiche') ? h('div', { key: 'cols', style: sty('d:fx;fd:col;g:9px;ff:GS;fs:13.5px;lh:1.6;c:#4a4038;tw:pty') }, String(pop.body).split('\n').filter(Boolean).map((p, i) => h('div', { key: i }, p))) : h('div', { key: 'cols', style: sty('d:fx;g:16px;fwr:wrp;ai:fsr2') }, [inputCol, graphCol]),
          (pop.kind !== 'fiche' && notes.length) ? h('div', { key: 'nt', style: sty('mgt:13px;pdt:11px;bdt:1px dashed #ece0c8;ff:GS;fs:12.5px;lh:1.5;c:#4a4038;tw:pty') }, notes.map(n => n.v).join(' ')) : null,
          h('div', { key: 'f', style: sty('mgt:13px;ff:P;fs:10.5px;c:#a8946e') }, d.fakeNote)
        ])
      ]));
    }
    return this.card(kids);
  }

  gripper(closed) {
    const h = React.createElement, a = closed ? 0 : 20;
    return h('svg', { width: 46, height: 42, viewBox: '0 0 46 42', style: sty('d:blk') }, [
      h('rect', { key: 'm', x: 15, y: 4, width: 16, height: 6, rx: 3, fill: '#7d6f57' }),
      h('rect', { key: 'n', x: 21, y: 9, width: 4, height: 5, fill: '#9a8a6c' }),
      h('g', { key: 'lf', transform: 'rotate(' + a + ' 19 13)' }, [h('rect', { key: 'a', x: 16.5, y: 12, width: 4, height: 20, rx: 2, fill: '#b09a72' }), h('rect', { key: 'b', x: 12.5, y: 28, width: 8, height: 4, rx: 2, fill: '#b09a72' })]),
      h('g', { key: 'rf', transform: 'rotate(' + (-a) + ' 27 13)' }, [h('rect', { key: 'a', x: 25.5, y: 12, width: 4, height: 20, rx: 2, fill: '#b09a72' }), h('rect', { key: 'b', x: 25.5, y: 28, width: 8, height: 4, rx: 2, fill: '#b09a72' })])
    ]);
  }
  fruitScene(pi) { return pi === 1 ? this.pourScene(pi) : (pi === 2 ? this.rlhfScene(pi) : (pi === 3 ? this.ragScene(pi) : (pi === 4 ? this.toolsScene(pi) : this.sortScene(pi)))); }
  serverEl(opts) {
    const h = React.createElement, o = opts || {}, leds = o.leds || ['#ff4fa3', '#5ec97f', '#ffb02e'];
    return h('div', { key: 'srv', style: sty('p:abs;z:1;tf:scale(.9);tfo:top left', { left: (o.left || '14px'), top: (o.top || '20px') }) }, [
      h('div', { key: 'box', style: sty('w:54px;h:68px;br:7px;bg:linear-gradient(180deg,#3a4048,#23272d);bd:1.5px solid #4a5058;sh:0 0 14px 2px rgba(94,201,127,.45);d:fx;fd:col;g:5px;pd:7px 6px') }, [0, 1, 2].map(r => h('div', { key: r, style: sty('d:fx;ai:ctr;g:4px') }, [
        h('div', { key: 'd', style: sty('w:7px;h:7px;br:50%', { background: leds[r], animation: 's2bip 1s ' + (r * 0.25) + 's infinite' }) }),
        h('div', { key: 'b', style: sty('fl:1;h:4px;br:2px;bg:rgba(255,255,255,.14)') })
      ]))),
      h('div', { key: 'lbl', style: sty('mgt:3px;ff:P;fs:8px;fw:700;c:#8a7c62;ta:ctr') }, o.label || 'Serveur')
    ]);
  }
  wireEl(fromLeft, toLeft, colr) {
    const h = React.createElement, W = toLeft - fromLeft, H = 84;
    const d = (function(){ let p = 'M 0 6'; const n = Math.max(4, Math.round(W / 16)); for (let k = 1; k <= n; k++) { const x = (W * k / n), y = 6 + (72 * k / n) + (k % 2 === 0 ? 7 : -7); const cx = (W * (k - 0.5) / n), cy = 6 + (72 * (k - 0.5) / n) + (k % 2 === 0 ? -9 : 9); p += ' Q ' + cx.toFixed(1) + ' ' + cy.toFixed(1) + ' ' + x.toFixed(1) + ' ' + y.toFixed(1); } return p; })();
    return h('svg', { key: 'wire', width: W, height: H, viewBox: '0 0 ' + W + ' ' + H, preserveAspectRatio: 'none', style: sty('p:abs;t:86px;z:1;ov:visible', { left: fromLeft + 'px' }) }, h('path', { d: d, fill: 'none', stroke: (colr || '#5ec97f'), strokeWidth: 3, strokeLinecap: 'round', strokeDasharray: '2 7', style: sty('an:s2flow .5s linear infinite') }));
  }
  ragScene(pi) {
    const h = React.createElement, acc = this.T().tuto[pi].accent, sc = this.T().ragSceneT || {};
    const FR = [{ e: '\ud83c\udf4e', bin: 96 }, { e: '\ud83c\udf4c', bin: 284 }];
    const t = this.state.robot, RD = [1, 1, 1, 2, 2, 2, 2, 1], cyc = Math.floor(t / 12) % 2, cur = FR[cyc], bx = cur.bin;
    let racc = t % 12, f = 0; for (let rk = 0; rk < RD.length; rk++) { if (racc < RD[rk]) { f = rk; break; } racc -= RD[rk]; }
    const frames = [{ hx: 190, hy: 86, cl: false, held: false, scan: false }, { hx: 190, hy: 108, cl: true, held: true, scan: false }, { hx: 190, hy: 54, cl: true, held: true, scan: false }, { hx: bx - 42, hy: 156, cl: true, held: true, scan: true }, { hx: bx - 42, hy: 156, cl: true, held: true, scan: true }, { hx: bx, hy: 72, cl: true, held: true, scan: false }, { hx: bx, hy: 100, cl: false, held: false, scan: false }, { hx: 190, hy: 54, cl: false, held: false, scan: false }];
    const scanSide = frames[f].scan ? (frames[f].hx < 190 ? 'L' : 'R') : null;
    const fr = frames[f];
    const heldNode = h('div', { key: 'g', style: sty('p:abs;l:0px;t:0px;d:fx;ai:ctr', { transform: fr.scan ? 'translate(-50%,-50%)' : 'translate(-50%,-42%)', flexDirection: fr.scan ? 'row' : 'column' }) }, [
      h('div', { key: 'gw', style: sty('tr:transform .4s ease', { transform: fr.scan ? 'rotate(-90deg)' : 'none' }) }, this.gripper(fr.cl)), fr.held ? h('div', { key: 'h', style: sty('fs:22px;p:rel;z:6', { marginTop: fr.scan ? '0px' : '-8px', marginLeft: fr.scan ? '-23px' : '0px' }) }, cur.e) : null, fr.scan ? this.beamBox() : null
    ]);
    const arm = this.armEl({ x: fr.hx, y: fr.hy }, heldNode);
    const bin = (label, x, tone, active) => h('div', { key: 'bin' + x, style: sty('p:abs;bt:10px;tf:translateX(-50%);d:fx;fd:col;ai:ctr;g:3px;z:2', { left: x + 'px' }) }, [h('div', { key: 'l', style: sty('fs:15px') }, label), h('div', { key: 'b', style: sty('p:rel;w:54px;h:28px;br:5px 5px 10px 10px', { background: tone.bg, border: '1.5px solid ' + tone.bd }) }, active ? this.binScan(13, 10, 3) : null)]);
    return this.stage([
      this.accPill(acc),
      this.serverEl({ left: '12px', top: '18px', label: sc.server || 'Serveur' }),
      h('div', { key: 'farmer', style: sty('p:abs;l:66px;t:30px;fs:22px;z:6') }, '🧑‍🌾'),
      this.wireEl(40, 190, '#5ec97f'),
      h('div', { key: 'binBack', style: sty('p:abs;l:70px;bt:20px;tf:translateX(-50%) scale(.82);op:.68;z:1;d:fx;fd:col;ai:ctr;g:3px') }, [h('div', { key: 'l', style: sty('fs:13px') }, '\ud83c\udf4e'), h('div', { key: 'b', style: sty('w:54px;h:28px;bg:#ffe1e1;bd:1.5px solid #f0b3a6;br:5px 5px 10px 10px') })]),
      bin('\ud83c\udf4e', 40, { bg: '#ffe1e1', bd: '#f0b3a6' }, false),
      bin('\ud83c\udf4e', 96, { bg: '#ffe1e1', bd: '#f0b3a6' }, scanSide === 'L'),
      bin('\ud83c\udf4c', 284, { bg: '#fff3cf', bd: '#e6c86a' }, scanSide === 'R'),
      bin('\ud83c\udf4c', 340, { bg: '#fff3cf', bd: '#e6c86a' }, false),
      fr.scan ? h('div', { key: 'sv', style: sty('p:abs;t:40px;tf:translateX(-50%);fs:17px;z:7;an:s2pop .3s ease', { left: fr.hx + 'px' }) }, f === 3 ? '❌' : '✅') : null,
      (f < 1) ? h('div', { key: 'belt', style: sty('p:abs;l:190px;t:108px;tf:translate(-50%,-50%);fs:24px;z:2') }, cur.e) : null,
      this.ped(arm.S.y, 3, 3),
      arm.node
    ]);
  }
  toolsScene(pi) {
    const h = React.createElement, acc = this.T().tuto[pi].accent, sc = this.T().toolsSceneT || {};
    const t = this.state.robot, f = Math.floor(t / 2) % 11, cyc = Math.floor(t / 22) % 2;
    const BAL = 66, AG = 108, cL = 80, cR = 300, destX = cyc === 0 ? cR : cL;
    const frames = [
      { hx: 190, hy: 58, cl: false, hold: false, act: '' },
      { hx: AG, hy: 104, cl: false, hold: false, act: 'date' },
      { hx: 190, hy: 66, cl: false, hold: false, act: '' },
      { hx: 190, hy: 86, cl: false, hold: false, act: '' },
      { hx: 190, hy: 108, cl: true, hold: true, act: 'pick' },
      { hx: 190, hy: 54, cl: true, hold: true, act: '' },
      { hx: BAL, hy: 65, cl: true, hold: true, act: 'weigh' },
      { hx: destX - 42, hy: 156, cl: true, hold: true, act: 'scan' },
      { hx: destX, hy: 100, cl: true, hold: true, act: '' },
      { hx: destX, hy: 100, cl: false, hold: false, act: 'drop' },
      { hx: 190, hy: 58, cl: false, hold: false, act: '' }
    ];
    const fr = frames[f];
    const heldNode = h('div', { key: 'g', style: sty('p:abs;l:0px;t:0px;d:fx;ai:ctr', { transform: (fr.act === 'scan') ? 'translate(-50%,-50%)' : 'translate(-50%,-42%)', flexDirection: (fr.act === 'scan') ? 'row' : 'column' }) }, [h('div', { key: 'gw', style: sty('tr:transform .4s ease', { transform: (fr.act === 'scan') ? 'rotate(-90deg)' : 'none' }) }, this.gripper(fr.cl)), fr.hold ? h('div', { key: 'a', style: sty('fs:18px;p:rel;z:6', { marginTop: (fr.act === 'scan') ? '0px' : '-8px', marginLeft: (fr.act === 'scan') ? '-21px' : '0px' }) }, '🍎') : null, (fr.act === 'scan') ? this.beamBox() : null]);
    const arm = this.armEl({ x: fr.hx, y: fr.hy }, heldNode);
    const tool = (x, emoji, label, on) => h('div', { key: 'tool' + x, style: sty('p:abs;bt:74px;tf:translateX(-50%);d:fx;fd:col;ai:ctr;g:3px;z:2', { left: x + 'px' }) }, [
      h('div', { key: 'e', style: sty('fs:22px;tr:transform .3s', { transform: on ? 'scale(1.25)' : 'scale(1)', filter: on ? 'drop-shadow(0 0 7px #ff9ccb)' : 'drop-shadow(0 2px 3px rgba(58,40,20,.2))' }) }, emoji),
      h('div', { key: 'l', style: sty('ff:P;fs:9.5px;fw:700;c:#8a7c62') }, label)
    ]);
    const crate = (x, active) => h('div', { key: 'cr' + x, style: sty('p:abs;bt:10px;tf:translateX(-50%);z:2;d:fx;fd:col;ai:ctr;g:2px', { left: x + 'px' }) }, [
      h('div', { key: 'a', style: sty('fs:13px;h:16px;tr:transform .3s', { transform: active && fr.act === 'drop' ? 'scale(1.3)' : 'scale(1)' }) }, '🍎'),
      h('div', { key: 'b', style: sty('p:rel;w:42px;h:22px;bg:#ffe1e1;bd:1.5px solid #f0b3a6;br:4px 4px 8px 8px') }, active ? this.binScan(9, 6, 2) : null)
    ]);
    return this.stage([
      h('div', { key: 'orch', style: sty('p:abs;l:10px;t:10px;d:ifx;ai:ctr;g:5px;bg:#fff;bd:1px solid #eadfc8;br:999px;pd:3px 10px;ff:P;fs:10px;fw:700;c:#cb2a7d;z:6') }, [h('span', { key: 'i', style: sty('fs:12px') }, '🎼'), sc.conductor || 'Chef d’orchestre']),
      this.serverEl({ left: '300px', top: '32px', label: sc.server || 'Base de données', leds: ['#5ec97f', '#4d8bff', '#ff4fa3'] }),
      h('svg', { key: 'wire', width: 380, height: 190, viewBox: '0 0 380 190', preserveAspectRatio: 'none', style: sty('p:abs;l:0;t:0;z:1;pe:non') }, h('path', { d: 'M 190 166 Q 262 150 302 66', fill: 'none', stroke: '#4d8bff', strokeWidth: 3, strokeLinecap: 'round', strokeDasharray: '2 7', style: sty('an:s2flow .5s linear infinite') })),
      tool(BAL, '⚖️', sc.scale || 'Balance', fr.act === 'weigh'),
      tool(AG, '📅', sc.cal || 'Agenda', fr.act === 'date'),
      crate(cL, cyc === 1 && fr.act === 'scan'),
      crate(cR, cyc === 0 && fr.act === 'scan'),
      (fr.act === 'date') ? h('div', { key: 'db', style: sty('p:abs;bt:112px;tf:translateX(-50%);bg:#0c1b4b;c:#fff;ff:P;fs:10px;fw:700;br:8px;pd:3px 9px;ws:nwr;z:6;an:s2pop .3s ease', { left: AG + 'px' }) }, (sc.today || 'Aujourd’hui') + ' : mar. 17') : null,
      (fr.act === 'weigh') ? h('div', { key: 'wb', style: sty('p:abs;bt:112px;tf:translateX(-50%);bg:#14683a;c:#fff;ff:P;fs:10px;fw:700;br:8px;pd:3px 9px;ws:nwr;z:6;an:s2pop .3s ease', { left: BAL + 'px' }) }, '≈ 152 g') : null,
      this.ped(arm.S.y, 3, 3),
      arm.node
    ]);
  }
  armEl(hand, held) {
    const h = React.createElement, DEG = 180 / Math.PI, S = { x: 190, y: 118 }, L1 = 60, L2 = 56;
    let dx = hand.x - S.x, dy = hand.y - S.y, d = Math.max(1, Math.min(L1 + L2 - 2, Math.hypot(dx, dy)));
    const a = Math.atan2(dy, dx), cosI = Math.max(-1, Math.min(1, (L1 * L1 + d * d - L2 * L2) / (2 * L1 * d)));
    const shA = a - Math.acos(cosI), elbow = { x: S.x + L1 * Math.cos(shA), y: S.y + L1 * Math.sin(shA) }, foreA = Math.atan2(hand.y - elbow.y, hand.x - elbow.x);
    const trans = 'transform .5s cubic-bezier(.5,.1,.4,1)';
    const bar = (len, w, col) => h('div', { style: sty('p:abs;l:0px', { top: (-w / 2) + 'px', width: len + 'px', height: w + 'px', background: col, borderRadius: w + 'px' }) });
    const jt = (r, col) => h('div', { style: sty('p:abs;br:50%;bd:2px solid #3a3f47', { left: (-r) + 'px', top: (-r) + 'px', width: r * 2 + 'px', height: r * 2 + 'px', background: col }) });
    return { S, trans, node: h('div', { key: 'arm', style: sty('p:abs;w:0;h:0;tfo:0 0;z:4', { left: S.x + 'px', top: S.y + 'px', transform: 'rotate(' + (shA * DEG) + 'deg)', transition: trans }) }, [
      bar(L1 + 6, 15, 'linear-gradient(180deg,#f08a3c,#d9691f)'), jt(11, '#3a3f47'),
      h('div', { key: 'el', style: sty('p:abs;t:0px;w:0;h:0;tfo:0 0', { left: L1 + 'px', transform: 'rotate(' + ((foreA - shA) * DEG) + 'deg)', transition: trans }) }, [
        bar(L2 + 4, 12, 'linear-gradient(180deg,#f79a4e,#e8722a)'), jt(8, '#5a616b'),
        h('div', { key: 'hd', style: sty('p:abs;t:0px;w:0;h:0', { left: L2 + 'px', transform: 'rotate(' + ((-foreA) * DEG) + 'deg)', transition: trans }) }, held)
      ])
    ]) };
  }
  rlhfScene(pi) {
    const h = React.createElement, acc = this.T().tuto[pi].accent, sc = this.T().rlhfSceneT || {};
    const t = this.state.robot;
    const PH = [
      { soft: 22, prec: 18, held: false, res: null, joy: -1, hx: 296, hyU: 70, hyD: 120 },
      { soft: 22, prec: 18, held: true, res: 'crush', joy: -1, hx: 296, hyU: 70, hyD: 120 },
      { soft: 92, prec: 26, held: false, res: null, joy: 1, hx: 306, hyU: 70, hyD: 120 },
      { soft: 92, prec: 26, held: true, res: 'miss', joy: 1, hx: 306, hyU: 70, hyD: 120 },
      { soft: 30, prec: 90, held: false, res: null, joy: -1, hx: 290, hyU: 70, hyD: 120 },
      { soft: 30, prec: 90, held: true, res: 'crush', joy: -1, hx: 290, hyU: 70, hyD: 120 },
      { soft: 84, prec: 80, held: false, res: null, joy: 0, hx: 300, hyU: 70, hyD: 120 },
      { soft: 84, prec: 80, held: true, res: 'ok', joy: 0, hx: 300, hyU: 70, hyD: 120 }
    ];
    const ph = PH[Math.floor(t / 3) % 8], soft = ph.soft, prec = ph.prec, held = ph.held, crushed = ph.res === 'crush', missed = ph.res === 'miss', okState = ph.res === 'ok';
    const strawTransform = crushed ? 'scaleX(1.6) scaleY(.55)' : (missed ? 'rotate(60deg) translateY(6px)' : 'none');
    const heldNode = h('div', { key: 'g', style: sty('p:abs;l:0px;t:0px;tf:translate(-50%,-42%);d:fx;fd:col;ai:ctr') }, [
      this.gripper(held && !missed), (held && !missed) ? h('div', { key: 'b', style: sty('mgt:-18px;p:rel;z:6;tr:all .35s', { fontSize: crushed ? '15px' : '20px', transform: strawTransform }) }, '\ud83c\udf53') : null
    ]);
    const arm = this.armEl({ x: ph.hx, y: held ? ph.hyU : ph.hyD }, heldNode);
    const glowCol = okState ? '#3fae63' : ((crushed || missed) ? '#e0563a' : null);
    const slider = (label, val, col) => h('div', { key: label, style: sty('mgb:7px') }, [
      h('div', { key: 'l', style: sty('d:fx;jc:sb;ff:P;fs:10px;fw:700;c:#6f6350;mgb:3px') }, [h('span', { key: 'a' }, label), h('span', { key: 'b', style: { color: col } }, val + '%')]),
      h('div', { key: 'bar', style: sty('h:8px;br:999px;bg:#efe4d2;ov:hid') }, h('div', { style: sty('h:100%;br:999px;tr:width .5s ease', { width: val + '%', background: col }) }))
    ]);
    const human = h('div', { key: 'human', style: sty('p:abs;l:20px;bt:20px;z:6;d:fx;fd:col;ai:ctr') }, [
      h('span', { key: 'lb', style: sty('ff:P;fs:8px;fw:700;c:#a8946e;ws:nwr;mgb:3px') }, sc.operator || 'Vous r\u00e9glez'),
      h('div', { key: 'guy', style: sty('fs:22px;lh:1;mgb:-3px') }, '\ud83e\uddd1'),
      h('div', { key: 'joy', style: sty('p:rel;w:46px;h:26px;mgt:2px;bg:linear-gradient(180deg,#454b53,#2f343b);br:6px 6px 4px 4px') }, [
        h('div', { key: 'stick', style: sty('p:abs;l:50%;bt:9px;w:4px;h:16px;bg:#8a8f98;br:2px;tfo:bottom center;tr:transform .6s ease', { transform: 'translateX(-50%) rotate(' + (ph.joy * 26) + 'deg)' }) }, h('div', { style: sty('p:abs;t:-5px;l:50%;tf:translateX(-50%);w:10px;h:10px;br:50%;bg:#ff4fa3') }))
      ])
    ]);
    const verdictTxt = crushed ? (sc.crush || 'Trop fort : fraise abimee') : (missed ? (sc.miss || 'Prise ratee : fraise tombee') : (sc.ok || 'Parfait : fraise intacte'));
    return this.stage([
      this.accPill(acc),
      h('div', { key: 'panel', style: sty('p:abs;l:10px;t:10px;w:132px;bg:rgba(255,253,248,.9);bd:1px solid #eadfc8;br:10px;pd:9px 11px;z:6') }, [slider(sc.soft || 'Douceur', soft, '#cb2a7d'), slider(sc.prec || 'Précision', prec, '#2a4fd7')]),
      h('div', { key: 'plate', style: sty('p:abs;bt:36px;tf:translateX(-50%);w:70px;h:10px;br:50%;bg:#e2d3bb;z:1;tr:left .5s cubic-bezier(.5,.1,.4,1)', { left: ph.hx + 'px' }) }),
      (!held) ? h('div', { key: 'straw', style: sty('p:abs;bt:40px;tf:translateX(-50%);fs:22px;z:3;tr:left .5s cubic-bezier(.5,.1,.4,1)', { left: ph.hx + 'px' }) }, '\ud83c\udf53') : null,
      missed ? h('div', { key: 'fall', style: sty('p:abs;bt:16px;fs:18px;z:7;an:s2fall .6s ease-out both', { left: (ph.hx - 30) + 'px' }) }, '\ud83c\udf53') : null,
      glowCol ? h('div', { key: 'glow', style: sty('p:abs;t:84px;tf:translate(-50%,-50%);w:48px;h:48px;br:50%;z:1;tr:left .5s', { left: ph.hx + 'px', boxShadow: '0 0 20px 6px ' + glowCol }) }) : null,
      this.ped(arm.S.y, 1, 2),
      arm.node,
      human,
      ph.res ? h('div', { key: 'verdict', style: sty('p:abs;r:10px;bt:8px;d:ifx;ai:ctr;g:5px;ff:P;fs:9.5px;fw:700;br:999px;pd:3px 9px;z:6', { color: okState ? '#14683a' : '#9c2f1e', background: okState ? '#eaf7ef' : '#fdf2ef', border: '1px solid ' + (okState ? '#bfe3cd' : '#f2cfc6') }) }, [h('span', { key: 'i', style: sty('fs:11px') }, okState ? '\u2705' : '\u274c'), verdictTxt]) : null
    ]);
  }
  sortScene(pi) {

    const h = React.createElement, acc = this.T().tuto[pi].accent;
    const FR = [{ e: '\ud83c\udf4e', bin: 96 }, { e: '\ud83c\udf4c', bin: 284 }];
    const t = this.state.robot, f = t % 8, cyc = Math.floor(t / 8) % 2, cur = FR[cyc], bx = cur.bin;
    const frames = [
      { hx: 190, hy: 96, cl: false, held: false, belt: true, drop: false },
      { hx: 190, hy: 86, cl: false, held: false, belt: true, drop: false },
      { hx: 190, hy: 108, cl: true, held: true, belt: false, drop: false },
      { hx: 190, hy: 54, cl: true, held: true, belt: false, drop: false },
      { hx: bx, hy: 72, cl: true, held: true, belt: false, drop: false },
      { hx: bx, hy: 120, cl: true, held: true, belt: false, drop: false },
      { hx: bx, hy: 120, cl: false, held: false, belt: false, drop: true },
      { hx: 190, hy: 58, cl: false, held: false, belt: false, drop: false }
    ];
    const fr = frames[f];
    const heldNode = h('div', { key: 'g', style: sty('p:abs;l:0px;t:0px;tf:translate(-50%,-42%);d:fx;fd:col;ai:ctr') }, [
      this.gripper(fr.cl), fr.held ? h('div', { key: 'h', style: sty('fs:22px;mgt:-8px') }, cur.e) : null
    ]);
    const arm = this.armEl({ x: fr.hx, y: fr.hy }, heldNode);
    const bin = (label, x, tone, active) => h('div', { key: 'bin' + x, style: sty('p:abs;bt:10px;tf:translateX(-50%);d:fx;fd:col;ai:ctr;g:3px;z:1', { left: x + 'px' }) }, [
      h('div', { key: 'l', style: sty('fs:15px;tr:transform .3s', { transform: active && fr.drop ? 'scale(1.3)' : 'scale(1)' }) }, label),
      h('div', { key: 'b', style: sty('w:54px;h:28px;br:5px 5px 10px 10px', { background: tone.bg, border: '1.5px solid ' + tone.bd }) })
    ]);
    return this.stage([
      this.accPill(acc),
      bin('\ud83c\udf4e', 96, { bg: '#ffe1e1', bd: '#f0b3a6' }, cyc === 0),
      bin('\ud83c\udf4c', 284, { bg: '#fff3cf', bd: '#e6c86a' }, cyc === 1),
      fr.belt ? h('div', { key: 'belt', style: sty('p:abs;l:190px;t:92px;tf:translate(-50%,-50%);fs:24px;z:1') }, cur.e) : null,
      this.ped(arm.S.y, 1, 2),
      arm.node
    ]);
  }
  pourScene(pi) {
    const h = React.createElement, acc = this.T().tuto[pi].accent;
    const TB = [{ x: 288, fail: true }, { x: 92, fail: false }];
    const t = this.state.robot, f = t % 8, cyc = Math.floor(t / 8) % 2, act = TB[cyc], gx = act.x, fail = act.fail;
    const fillArr = [0, 0, 0, 40, 80, fail ? 126 : 100, fail ? 126 : 100, fail ? 126 : 100];
    const fillPct = fillArr[f], pouring = f >= 3 && f <= 5, inPlace = f >= 2 && f <= 5, result = f >= 5, glowCol = result ? (fail ? '#e0563a' : '#3fae63') : null;
    const poury = gx > 190 ? 42 : 34; const hand = { x: inPlace ? gx - (gx > 190 ? 12 : 8) : gx, y: inPlace ? poury : (f === 0 ? 60 : (f === 7 ? 48 : 66)) };
    const bottle = h('div', { key: 'bo', style: sty('p:abs;l:0px;t:0px;tfo:50% 50%;tr:transform .5s ease;w:17px;h:34px;br:4px 4px 6px 6px;bg:linear-gradient(180deg,#8fce0022,#e88a1e);bd:1.5px solid #c96e15', { transform: 'translate(-50%,-50%) rotate(' + (pouring ? (gx > 190 ? 150 : 162) : 4) + 'deg)' }) }, [
      h('div', { key: 'nk', style: sty('p:abs;t:-7px;l:50%;tf:translateX(-50%);w:6px;h:8px;bg:#c96e15;br:2px') }),
      h('div', { key: 'jz', style: sty('p:abs;bt:3px;l:2px;r:2px;h:18px;br:3px;bg:#f2951f') })
    ]);
    const arm = this.armEl(hand, [h('div', { key: 'gr', style: sty('p:abs;l:0px;t:0px;tf:translate(-50%,-50%)') }, this.gripper(true)), bottle]);
    const glassH = 40, innerH = 34, fillH = Math.min(fillPct, 100) / 100 * innerH;
    const glass = h('div', { key: 'glass', style: sty('p:abs;bt:34px;tf:translateX(-50%);w:30px;br:4px 4px 8px 8px;bd:2px solid #b9c4cc;bdt:non;bg:rgba(255,255,255,.5);ov:visible;z:2;tr:box-shadow .3s', { left: gx + 'px', height: glassH + 'px', boxShadow: glowCol ? '0 0 14px 3px ' + glowCol : 'none' }) }, [
      h('div', { key: 'fill', style: sty('p:abs;l:2px;r:2px;bt:2px;br:2px 2px 6px 6px;bg:linear-gradient(180deg,#ffb02e,#f2951f);tr:height .5s ease', { height: fillH + 'px' }) }),
      (fail && result) ? h('div', { key: 'lip', style: sty('p:abs;l:50%;t:-5px;w:34px;h:8px;br:5px;bg:linear-gradient(180deg,#ffb02e,#f2951f);tfo:center top;an:s2over .35s ease both') }) : null,
      (fail && result) ? h('div', { key: 'dripL', style: sty('p:abs;l:-3px;t:0px;w:5px;h:20px;br:3px;bg:linear-gradient(180deg,#f2951f,#e07d12);tfo:top;an:s2drip .7s ease-in both') }) : null,
      (fail && result) ? h('div', { key: 'dripR', style: sty('p:abs;r:-3px;t:3px;w:5px;h:17px;br:3px;bg:linear-gradient(180deg,#f2951f,#e07d12);tfo:top;an:s2drip .7s ease-in .15s both') }) : null
    ]);
    const puddle = (fail && result) ? h('div', { key: 'pud', style: sty('p:abs;bt:29px;tf:translateX(-50%);w:56px;h:8px;br:50%;bg:radial-gradient(ellipse at center,#f2951f,#e07d12);tfo:ctr;an:s2puddle .8s ease-out .3s both;z:1', { left: gx + 'px' }) }) : null;
    const stream = pouring ? h('div', { key: 'str', style: sty('p:abs;w:3px;bg:#f2951f;br:2px;op:.9;z:3', { left: gx + 'px', top: (hand.y + 21) + 'px', height: (99 - hand.y) + 'px' }) }) : null;
    const table = (x, on) => h('div', { key: 'tb' + x, style: sty('p:abs;bt:10px;tf:translateX(-50%);w:86px;z:1', { left: x + 'px' }) }, [
      h('div', { key: 't', style: sty('w:86px;h:8px;br:3px', { background: on ? '#d8b48a' : '#e2d3bb' }) }),
      h('div', { key: 'lg', style: sty('d:fx;jc:sb;pd:0 8px') }, [h('div', { key: 'a', style: sty('w:5px;h:16px;bg:#c8ad84') }), h('div', { key: 'b', style: sty('w:5px;h:16px;bg:#c8ad84') })])
    ]);
    return this.stage([
      this.accPill(acc),
      table(92, cyc === 1), table(288, cyc === 0),
      puddle, glass, stream,
      this.ped(arm.S.y, 1, 2),
      arm.node
    ]);
  }
  renderTuto(T, pi) {
    const h = React.createElement, tu = T.tuto[pi], ph = T.phases[pi];
    return h('div', { key: 'tuto' + pi, style: sty('an:s2enterR .45s ease both') }, [
      this.card([
        h('div', { key: 'sceneWrap', style: sty('p:rel') }, [
          h('span', { key: 'tutopill', style: sty('p:abs;r:10px;t:8px;z:7;d:ifx;ai:ctr;g:5px;ff:P;fs:10px;fw:700;lsp:.04em;tt:up;c:#14683a;bg:#c8ecd4;bd:1px solid #8fd9a8;br:999px;pd:3px 10px') }, [h('span', { key: 'd', style: sty('fs:9px') }, '\u25b6'), T.tutoPill]),
          this.fruitScene(pi)
        ]),
        h('div', { key: 'ein', style: sty('d:fx;g:12px;ai:fsr2') }, [
          this.einstein(78),
          h('div', { key: 'bub', style: sty('fl:1 1 auto;nw:0;bg:#fff;bd:1px solid #ece0c8;br:6px 14px 14px 14px;pd:12px 15px;ff:GS;fs:14.5px;lh:1.55;tw:pty;sh:0 2px 8px rgba(58,40,20,.05)') }, [h('span', { key: 'b', style: sty('ws:pre-line') }, tu.bubble), h('span', { key: 'llm', style: sty('d:blk;mgt:9px;pdt:9px;bdt:1px dashed #ece0c8;fs:13.5px;c:#6f5a37') }, [h('b', { key: 'p', style: sty('c:#cb2a7d') }, T.llmParallel + ' '), tu.transpose])])
        ]),
        h('div', { key: 'cta', style: sty('d:fx;jc:ctr;mgt:15px') }, [this.pinkBtn(T.tutoCta, () => this.setState({ tuto: false }), 'c')])
      ])
    ]);
  }

  renderCelebration(T) {
    const h = React.createElement, confetti = this.confettiEls(26, 3.7);
    return h('div', { key: 'celeb', style: sty('p:rel;ov:hid;ta:ctr;pd:30px 20px 34px;bg:linear-gradient(180deg,#fffdf8,#fff0f7);bd:1px solid #ffc4e0;br:16px;an:s2in .4s ease') }, [
      h('div', { key: 'cf', style: sty('p:abs;ins:0;pe:non') }, confetti),
      this.einstein(80),
      h('div', { key: 't', style: sty('p:rel;ff:GS;fs:22px;fw:700;c:#cb2a7d;mg:12px 0 8px') }, T.celebTitle),
      h('div', { key: 'b', style: sty('p:rel;mw:460px;mg:0 auto;ff:GS;fs:16px;lh:1.6;c:#4a4038;tw:pty') }, T.celebBody),
      h('button', { key: 'c', onClick: () => this.setState({ ragCelebrated: true }), style: sty('p:rel;cur:pntr;mgt:18px;ff:P;fs:15px;fw:600;c:#fff;bg:#ff4fa3;bd:non;br:12px;pd:13px 26px;sh:0 4px 14px rgba(255,79,163,.32)') }, T.celebCta)
    ]);
  }

  renderFinal(T) {
    const h = React.createElement, confetti = this.confettiEls(28, 3.5);
    return h('div', { key: 'fin', style: sty('p:rel;ov:hid;ta:ctr;pd:30px 22px 34px;bg:linear-gradient(180deg,#fffdf8,#fff0f7);bd:1px solid #ffc4e0;br:16px;an:s2in .4s ease') }, [
      h('div', { key: 'cf', style: sty('p:abs;ins:0;pe:non') }, confetti),
      this.einstein(80),
      h('div', { key: 't', style: sty('p:rel;ff:GS;fw:700;c:#cb2a7d;mg:12px 0 8px', { fontSize: this.state.narrow ? '19px' : '22px' }) }, T.finTitle),
      h('div', { key: 'b', style: sty('p:rel;mw:470px;mg:0 auto;ff:GS;fs:16px;lh:1.6;c:#4a4038;tw:pty') }, T.finBody),
      h('div', { key: 'chips', style: sty('p:rel;d:fx;g:8px;jc:ctr;fwr:wrp;mg:16px 0 6px') }, [
        h('span', { key: 'a', style: sty('ff:P;fs:11px;fw:700;c:#cb2a7d;bg:#fff0f7;bd:1px solid #ffc4e0;br:999px;pd:5px 12px') }, '🧠 ' + T.sameAI),
        h('span', { key: 'r', style: sty('ff:P;fs:11px;fw:700;c:#14683a;bg:#eaf7ef;bd:1px solid #bfe3cd;br:999px;pd:5px 12px') }, '📄 RAG'),
        h('span', { key: 'o', style: sty('ff:P;fs:11px;fw:700;c:#b47e16;bg:#fff7ea;bd:1px solid #eed9a8;br:999px;pd:5px 12px') }, '⚙️ ' + (this.state.lang === 'en' ? 'Tools' : 'Outils'))
      ]),
      h('div', { key: 'potw', style: sty('p:rel;mw:420px;mg:14px auto 0') }, [
        h('div', { key: 'l', style: sty('d:fx;jc:sb;ff:P;fs:11px;fw:700;c:#b47e16;mgb:5px') }, [h('span', { key: 'a' }, T.finPot), h('span', { key: 'b' }, '100 %')]),
        h('div', { key: 'g', style: sty('h:12px;bg:#f0e2c0;br:999px;ov:hid') }, h('div', { style: sty('h:100%;br:999px;bg:linear-gradient(90deg,#ffca6a,#ff9e2c);sh:0 0 8px rgba(255,158,44,.5);an:s2grow 1.1s cubic-bezier(.2,.8,.3,1) both') }))
      ]),
      h('div', { key: 'gain', style: sty('p:rel;mw:620px;mg:24px auto 0;ta:left') }, [
        h('div', { key: 'gt', style: sty('ff:P;fs:11px;lsp:.08em;tt:up;c:#8a7c62;fw:700;mgb:10px;ta:ctr') }, T.finGain.title),
        h('div', { key: 'hero', style: sty('ta:ctr;bg:linear-gradient(180deg,#f1faf4,#eaf7ef);bd:1px solid #bfe3cd;br:14px;pd:16px 18px;mgb:18px') }, [
          h('div', { key: 'n', style: sty('ff:P;lh:1;fw:700;c:#14683a;lsp:-.02em', { fontSize: this.state.narrow ? '34px' : '44px' }) }, T.finGain.saved),
          h('div', { key: 'l', style: sty('mgt:6px;ff:GS;fs:14.5px;c:#3c5a48;tw:pty') }, T.finGain.savedLbl)
        ]),
        h('div', { key: 'r1', style: sty('mgb:16px') }, [
          h('div', { key: 'h', style: sty('d:fx;ai:baseline;jc:sb;mgb:6px') }, [h('span', { key: 'l', style: sty('ff:P;fs:13px;fw:700;c:#2a2320') }, T.finGain.aloneLbl), h('span', { key: 't', style: sty('ff:P;fs:17px;fw:700;c:#9c2f1e') }, T.finGain.aloneTotal)]),
          h('div', { key: 'bar', style: sty('d:fx;h:26px;br:8px;ov:hid;bd:1px solid #f0c9bd') }, T.finGain.segs.map((sg, i) => h('div', { key: i, title: sg.k, style: sty('d:fx;ai:ctr;jc:ctr;ff:P;fs:10px;fw:700;c:#fff;ov:hid;ws:nwr', { flex: sg.m + ' 0 0', background: sg.c }) }, sg.m >= 45 ? sg.t : ''))),
          h('div', { key: 'lg', style: sty('d:fx;fwr:wrp;g:5px 14px;mgt:9px') }, T.finGain.segs.map((sg, i) => h('span', { key: i, style: sty('d:ifx;ai:ctr;g:6px;ff:P;fs:11.5px;c:#6f6350') }, [h('span', { key: 'd', style: sty('w:9px;h:9px;br:3px;fl:0 0 auto', { background: sg.c }) }), h('span', { key: 'k' }, sg.k), h('strong', { key: 't', style: sty('c:#2a2320') }, sg.t)])))
        ]),
        h('div', { key: 'r2' }, [
          h('div', { key: 'h', style: sty('d:fx;ai:baseline;jc:sb;mgb:6px') }, [h('span', { key: 'l', style: sty('ff:P;fs:13px;fw:700;c:#14683a') }, T.finGain.withLbl), h('span', { key: 't', style: sty('ff:P;fs:17px;fw:700;c:#14683a') }, T.finGain.withTotal)]),
          h('div', { key: 'trk', style: sty('h:26px;bg:#eef3ec;br:8px;bd:1px solid #cfe3d4;ov:hid') }, h('div', { style: sty('nw:46px;h:100%;bg:linear-gradient(90deg,#5ec97f,#3fae63);d:fx;ai:ctr;jc:ctr;ff:P;fs:10px;fw:700;c:#fff', { width: T.finGain.withPct + '%' }) }, T.finGain.withTotal)),
          h('div', { key: 'n', style: sty('mgt:8px;ff:GS;fs:13px;c:#4a4038;tw:pty') }, T.finGain.note)
        ])
      ]),
      h('div', { key: 'rec', style: sty('p:rel;mw:600px;mg:26px auto 0;ta:left') }, [
        h('div', { key: 'rt', style: sty('ff:P;fs:11px;lsp:.08em;tt:up;c:#8a7c62;fw:700;mgb:18px;ta:ctr') }, T.finRecap.title),
        h('div', { key: 'bands' }, [
          { key: 'tr', from: 0, to: 3, pre: '', lbl: T.finRecap.grpTrain, def: T.finRecap.grpTrainDef, col: '#cb2a7d' },
          { key: 'eq', from: 3, to: 5, pre: '+ ', lbl: T.finRecap.grpEquip, def: T.finRecap.grpEquipDef, col: '#b47e16' }
        ].map((g, gi) => h('div', { key: g.key, style: { marginTop: gi ? '22px' : '0' } }, [
          h('div', { key: 'gh', style: sty('d:fx;ai:baseline;g:10px;fwr:wrp;pdb:7px', { borderBottom: '2px solid ' + g.col }) }, [
            h('span', { key: 'l', style: sty('ff:P;fs:13px;fw:700;lsp:.06em;tt:up', { color: g.col }) }, g.pre + g.lbl),
            h('span', { key: 'd', style: sty('fl:1 1 160px;nw:0;ff:GS;fst:italic;fs:13px;c:#8a7c62;tw:pty') }, g.def)
          ]),
          h('div', { key: 'rows', style: sty('d:fx;fd:col;g:7px;mgt:9px') }, T.finRecap.items.slice(g.from, g.to).map((it, k) => h('button', { key: k, onClick: () => this.enter(g.from + k + 1), title: T.finRecap.goBack, style: sty('ta:left;cur:pntr;d:fx;fwr:wrp;ai:baseline;g:3px 12px;pd:11px 13px;bg:#fff;bd:1px solid #ece0c8;br:12px;sh:0 1px 3px rgba(58,40,20,.05);tr:transform .15s, box-shadow .15s, border-color .15s'), 'style-hover': { transform: 'translateY(-2px)', borderColor: g.col, boxShadow: '0 5px 14px rgba(58,40,20,.1)' } }, [
            h('span', { key: 'k', style: sty('fl:0 0 auto;d:ifx;ai:baseline;g:7px', { width: this.state.narrow ? 'auto' : '138px' }) }, [
              h('span', { key: 'n', style: sty('ff:P;fs:11px;fw:700;op:.55', { color: g.col }) }, g.from + k + 1),
              h('span', { key: 'n2', style: sty('ff:P;fs:13.5px;fw:700;c:#2a2320') }, it.k)
            ]),
            h('span', { key: 'v', style: sty('fl:1 1 170px;nw:0;ff:GS;fs:14px;c:#4a4038;tw:pty') }, it.v),
            h('span', { key: 's', style: sty('fl:0 0 auto;ff:GS;fst:italic;fs:12.5px;c:#a8946e;ws:nwr') }, it.s)
          ])))
        ])))
      ]),
      h('div', { key: 'privnote', style: sty('p:rel;mw:600px;mg:22px auto 0;d:fx;g:10px;ai:fsr2;ta:left;bg:#fdf2ef;bd:1px solid #f2cfc6;br:12px;pd:12px 14px') }, [
        h('span', { key: 'i', style: sty('fl:0 0 auto;fs:15px') }, '🔒'),
        h('span', { key: 't', style: sty('ff:GS;fs:13px;lh:1.5;c:#7d3a2a;tw:pty') }, T.finRecap.privNote)
      ]),
      h('button', { key: 'c', onClick: () => this.reset(), style: sty('p:rel;cur:pntr;mgt:22px;ff:P;fs:15px;fw:600;c:#fff;bg:#ff4fa3;bd:non;br:12px;pd:13px 26px;sh:0 4px 14px rgba(255,79,163,.32)') }, T.finCta)
    ]);
  }

  renderPhase(T, pi) {
    const h = React.createElement, ph = T.phases[pi], done = this.goalMet(pi);
    if (pi === 3 && !this.state.ragCelebrated && this.state.maxReached >= 4) return this.renderCelebration(T);
    if (pi === 4 && this.state.finished) return this.renderFinal(T);
    if (this.state.tuto) return this.renderTuto(T, pi);
    let content;
    if (pi === 0) content = this.renderPre(T); else if (pi === 1) content = this.renderFt(T); else if (pi === 2) content = this.renderRlhf(T); else if (pi === 3) content = this.renderUse(T); else content = this.renderTools(T);
    const kicker = pi === 4 ? null : h('div', { key: 'k', style: sty('d:fx;ai:baseline;g:9px;mgb:12px;fwr:wrp') }, [
      h('span', { key: 'verb', style: sty('ff:P;fs:15.5px;fw:700;c:#2a2320') }, ph.verb),
      (ph.goal && !done) ? h('span', { key: 'goal', style: sty('ff:P;fs:12.5px;fw:600;c:#a8946e') }, '· ' + ph.goal) : null
    ]);
    const review = h('div', { key: 'rev', style: sty('mgt:12px;ta:ctr') }, h('button', { onClick: () => this.setState({ tuto: true }), style: sty('cur:pntr;ff:P;fs:12px;fw:600;c:#cb2a7d;bg:non;bd:non;td:underline') }, T.reviewTuto));
    return h('div', { key: 'ph' + pi, style: { animation: (this.state.dir < 0 ? 's2enterL' : 's2enterR') + ' .5s cubic-bezier(.34,1.2,.4,1) both' } }, [kicker, content, review]);
  }

  renderNav(T, pi) {
    const h = React.createElement, hi = this.pHi(), last = pi === hi, isEnd = pi === 4, ok = isEnd ? true : this.interacted(pi), noBack = this.props.part === 2 && this.state.step <= 4 && this.state.tuto;
    return h('div', { style: sty('d:fx;ai:ctr;jc:sb;g:12px;mgt:20px;pdt:16px;bdt:1px solid #ece0c8') }, [
      h('button', { key: 'p', onClick: noBack ? undefined : () => this.prev(), disabled: noBack, style: sty('ff:P;fs:13.5px;fw:600;br:10px;pd:10px 16px', { cursor: noBack ? 'not-allowed' : 'pointer', color: noBack ? '#bcae93' : '#6f6350', background: noBack ? '#eee3cf' : '#fff', border: '1px solid ' + (noBack ? '#eee3cf' : '#e3d8c2') }) }, T.prev),
      ok ? h('span', { key: 'c', style: sty('ff:P;fs:12px;fw:600;c:#a8946e') }, (pi + 1) + ' / 5') : h('span', { key: 'c', style: sty('ff:P;fs:11.5px;fw:600;c:#c58aa8;ta:ctr;tw:pty') }, T.gateHint),
      (last && this.props.part === 1) ? h('button', { key: 'x', onClick: ok ? () => this.handoff() : undefined, disabled: !ok, style: sty('ff:P;fs:13.5px;fw:600;bd:non;br:10px;pd:10px 18px', { cursor: ok ? 'pointer' : 'not-allowed', color: ok ? '#fff' : '#bcae93', background: ok ? '#ff4fa3' : '#eee3cf', boxShadow: ok ? '0 2px 8px rgba(255,79,163,.28)' : 'none' }) }, T.contNext)
      : last ? null : h('button', { key: 'x', onClick: ok ? () => this.next() : undefined, disabled: !ok, style: sty('ff:P;fs:13.5px;fw:600;bd:non;br:10px;pd:10px 18px', { cursor: ok ? 'pointer' : 'not-allowed', color: ok ? '#fff' : '#bcae93', background: ok ? '#ff4fa3' : '#eee3cf', boxShadow: ok ? '0 2px 8px rgba(255,79,163,.28)' : 'none' }) }, T.next)
    ]);
  }

  renderSources(T) {
    const h = React.createElement;
    return h('div', { style: sty('mgt:10px;ta:ctr;ff:P;fs:10.5px;c:#a8946e;lh:1.7') }, [h('span', { key: 'l', style: sty('mgr:8px;fw:600') }, T.sourcesLbl)].concat(T.sources.map((s, i) => h('a', { key: i, href: s.u, target: '_blank', rel: 'noopener noreferrer', style: sty('c:#cb2a7d;mg:0 8px;td:underline') }, s.l))));
  }

  renderVals() {
    const T = this.T(), step = this.state.step, pi = step - 1;
    return {
      title: T.title, lang: this.state.lang,
      rootRef: this._rootRef || (this._rootRef = (el) => { if (el && this.props.part === 2 && typeof window !== 'undefined') window.__apanaSim2P2 = el; }),
      onLang: e => this.setState({ lang: e.target.value }),
      overview: step === 0 ? null : this.renderOverview(T, pi),
      stepBody: step === 0 ? this.renderWelcome(T) : this.renderPhase(T, pi),
      nav: (step === 0 || (pi === 4 && this.state.finished)) ? null : this.renderNav(T, pi),
      disclaimer: (step === 0 || (pi === 4 && this.state.finished)) ? T.disc : '',
      sources: (pi === 4 && this.state.finished) ? this.renderSources(T) : null
    };
  }
  render() {
    const v = this.renderVals(), h = React.createElement;
    return h('div', { className: 'apana-sim2', ref: v.rootRef, style: { width: '100%', maxWidth: '960px', margin: '20px auto', fontFamily: "Poppins,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif", color: '#2a2320', backgroundColor: '#f5efe2', backgroundImage: NOISE, border: '1px solid #e3d8c2', borderRadius: '22px', padding: '26px 30px 22px' } }, [
      h('style', { key: 'css', dangerouslySetInnerHTML: { __html: CSS } }),
      h('div', { key: 'hd', style: sty('d:fx;jc:sb;ai:fsr2;g:14px;mgb:18px;fwr:wrp') }, [
        h('div', { key: 't', style: sty('nw:0') }, h('h3', { style: sty("ff:Georgia,'Times New Roman',serif;fw:700;fs:21px;lh:1.25;mg:0;c:#2a2320;tw:pty") },
          h('span', { style: { display: 'inline', padding: '0 3px', backgroundImage: 'linear-gradient(transparent 55%,#ffd2e7 55%,#ffc0dd 88%,transparent 88%)', boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' } }, v.title))),
        h('select', { key: 'lg', value: v.lang, onChange: v.onLang, style: sty('cur:pntr;fs:12px;c:#6f6350;fw:600;bd:1px solid #e3d8c2;bg:#fffdf8;br:8px;pd:6px 9px;ff:P') }, [
          h('option', { key: 'fr', value: 'fr' }, 'Français'),
          h('option', { key: 'en', value: 'en' }, 'English')
        ])
      ]),
      v.overview,
      h('div', { key: 'sb', style: sty('mgt:16px') }, v.stepBody),
      v.nav,
      h('div', { key: 'dc', style: sty('mgt:14px;ff:P;fs:11px;lh:1.5;c:#a8946e;ta:ctr') }, v.disclaimer),
      v.sources
    ]);
  }
}

const DATA = {
  fr: {
    title: 'Entraînez votre IA, de zéro à utile',
    prev: '\u2190 Précédent', next: 'Suivant \u2192', contNext: 'Continuer \u2192 partie 2', gateHint: '\u21b3 interagissez pour continuer',
    disc: 'Simulateur pédagogique : il illustre les grandes étapes et simplifie volontairement.',
    celebTitle: 'Bravo, l’entraînement est fini !', celebBody: 'Votre IA (et votre robot) sont prêts pour leur premier client. Voilà ce qui se passe chez eux maintenant.', celebCta: '🚜 Voir le premier client →',
    finTitle: 'Félicitations, votre IA est prête !', finBody: 'Vos clients peuvent maintenant l’utiliser à son plein potentiel, grâce au RAG et aux outils.', finPot: 'Potentiel IA', finCta: '↺ Recommencer', sameAI: 'Votre IA, du début à la fin', finRecap: { title: 'Récapitulatif des 5 étapes', goBack: 'Revoir cette étape', privNote: 'Données clients : avant d’utiliser une IA sur des dossiers réels, désactivez l’entraînement du modèle sur vos conversations, ou passez par un plan entreprise avec DPA.', grpTrain: 'Entraînement', grpTrainDef: 'ce que l’IA apprend une fois pour toutes', grpEquip: 'Équipement', grpEquipDef: 'ce qu’on lui branche ensuite : le RAG et les outils', items: [{ k: 'Pré-entraînement', v: 'apprendre à lire et à écrire', s: 'des milliards de mots' }, { k: 'Fine-tuning', v: 'prendre le bon ton et le vocabulaire métier', s: 'des milliers d’exemples' }, { k: 'RLHF', v: 'préférer la réponse la plus utile', s: 'des réponses notées par des humains' }, { k: 'RAG', v: 'répondre avec vos sources à jour', s: 'vos documents' }, { k: 'Outils', v: 'calculer et agir pour de vrai', s: 'simulateurs & rapports' }] }, finGain: { title: 'Le temps d’un dossier client', aloneLbl: 'IA seule', aloneTotal: '4 h', segs: [{ k: 'Échanges avec l’IA', t: '45 min', m: 45, c: '#e0846a' }, { k: 'Relecture', t: '1 h', m: 60, c: '#cf6a4e' }, { k: 'Corriger les infos fausses', t: '50 min', m: 50, c: '#b8543c' }, { k: 'Ressaisir dans les outils', t: '1 h 25', m: 85, c: '#8f3c2a' }], withLbl: 'IA + RAG + outils', withTotal: '10 min', withPct: 4, saved: '3 h 50', savedLbl: 'gagnées sur chaque dossier client', note: 'Les sources sont à jour : plus rien à corriger. Les outils calculent et remplissent eux-mêmes : plus rien à ressaisir.' }, priv: { eyebrow: 'Sécurité des données', title: 'Avant de lancer :', titleRed: 'les données de vos clients', body: 'Vos conversations peuvent servir à entraîner le modèle. Avec des données client, c’est un risque de confidentialité.', toggleLabel: 'Autoriser l’IA à s’entraîner sur mes conversations', toggleHint: 'Décochez avant de traiter des données réelles.', okMsg: 'Bien vu : l’entraînement sur vos échanges est désactivé. Vos données clients ne nourrissent plus le modèle.', proTitle: 'Prendre un plan entreprise chez votre fournisseur IA', proBody: 'Le plus sûr : rien à régler, tout est cadré par contrat côté fournisseur.', proCta: 'Voir', proChosenMsg: 'Voici ce que ça règle', orLbl: 'OU', recoLbl: 'Recommandé', proFeats: ['Entraînement désactivé par défaut', 'Localisation des données au choix', 'DPA fourni', 'Support dédié'], dpaTerm: 'DPA', dpaDef: 'Data Processing Agreement : un contrat qui interdit au fournisseur de réutiliser vos données pour l’entraînement (localisation maîtrisée, données sécurisées).', cta: 'Lancer en toute sécurité →', gateCta: 'Continuer en sécurité →' }, 
    sourcesLbl: 'Pour aller plus loin :',
    sources: [{ l: 'Transformer Explainer', u: 'https://poloclub.github.io/transformer-explainer/' }, { l: 'Illustrated RLHF (Hugging Face)', u: 'https://huggingface.co/blog/rlhf' }, { l: 'Qu\u2019est-ce que le RAG (IBM)', u: 'https://research.ibm.com/blog/retrieval-augmented-generation-RAG' }],
    eggs: ['E = mc\u00b2 · mais chut, c\u2019est un secret !', '\u00ab La logique vous mène de A à B. L\u2019imagination vous mène partout. \u00bb', '\u00ab Ce n\u2019est pas que je suis si intelligent\u2026 je reste juste plus longtemps sur les problèmes. \u00bb', '\ud83e\udde0 Merci de m\u2019avoir cliqué !'],
    welcome: { intro: 'Nous allons entraîner une IA.\n\nIci, l’IA qui nous intéresse est un LLM (grand modèle de langage), spécialisée dans le texte, comme ChatGPT, Claude ou Gemini.\n\nPour rendre chaque étape concrète, on l’illustre avec une IA robotique (un bras qui apprend un geste), puis on la transpose au LLM.\n\nEn 5 étapes, de zéro à vraiment utile.', cta: 'Commencer →' },
    phases: [
      { label: 'Pré-entraînement', sub: 'lire & deviner', act: 1, verb: 'Faites-la deviner', goal: 'Entraînez-la 5 fois pour faire monter la précision' },
      { label: 'Fine-tuning', sub: 'ton & métier', act: 1, verb: 'Montrez-lui le ton', goal: 'Choisissez un style et entraînez-le' },
      { label: 'RLHF', sub: 'le bon sens', act: 1, verb: 'Choisissez la meilleure réponse', goal: 'Faites les 3 choix pour l\u2019aligner' },
      { label: 'RAG', sub: 'répondre à jour', act: 2, verb: 'Mémoire ou source à jour ?', goal: 'Passez en mode source à jour' },
      { label: 'Outils', sub: 'agir', act: 2, verb: 'Donnez-lui les outils', goal: 'Branchez les outils Advisor pour un chiffre exact' }
    ],
    readyLbl: 'Entraînement', ready: [30, 60, 90, 100, 100],
    tutoPill: 'Démo robot', llmParallel: 'Et pour un LLM, c’est pareil mais sur du texte :', defnLbl: 'En clair', tutoCta: 'J’ai compris, tester sur le LLM', reviewTuto: '↺ Revoir le principe', 
    tuto: [
      { accent: '🔁 il s’entraîne', term: 'Pré-entraînement :', defn: 'en lisant d’énormes quantités de texte, l’IA apprend seulement à prédire le mot suivant.', bubble: 'Ce robot trie des fruits. Il se trompe, corrige sa prise, et après des milliers d’essais ne se trompe presque plus.', transpose: 'Le LLM fait pareil, mais avec des mots : il devine le mot suivant, se corrige, et sa précision monte.' },
      { accent: '✨ spécialisation', term: 'Fine-tuning (« réglage fin ») :', defn: 'on repart d’une IA déjà entraînée et on l’affine sur quelques exemples ciblés, pour lui donner un ton ou un métier.', bubble: 'Ce robot sait déjà manipuler des objets. Au lieu de tout réapprendre, on lui montre quelques démonstrations d’un cas précis : remplir un verre sans déborder.', transpose: 'Pareil pour le LLM : il sait déjà parler, on l’affine sur quelques exemples pour lui donner un rôle ou un métier.' },
      { accent: '👍 un humain tranche', term: 'RLHF (« apprentissage par retours humains ») :', defn: 'un humain compare les réponses et garde les meilleures ; l’IA apprend ainsi ce qu’on attend d’elle.', bubble: 'Ici, un humain finalise l’entraînement. Il règle « Douceur » et « Précision » vers ce qu’il préfère, jusqu’à ce que le robot attrape la fraise sans l’abîmer.', transpose: 'Sur le LLM, un humain choisit la meilleure réponse : le modèle apprend le « bon sens » qu’on attend de lui.' },
      { accent: '🎉 premier client', intro: 'On sort de l’entraînement : la formation est finie, place à l’utilisation. Parlons maintenant du RAG.', term: 'RAG (« génération augmentée par recherche ») :', defn: 'avant de répondre, l’IA va chercher l’info à jour dans une source fiable, au lieu de sa seule mémoire.', bubble: 'Chez le client, le robot ne sait pas quelle caisse est « du jour ». On lui branche l’information à jour de l’entreprise : il lit l’étiquette et range au bon endroit.', transpose: 'Le LLM lit une source à jour (le RAG) au lieu de répondre de mémoire.' },
      { accent: '⚖️ des outils', intro: 'Toujours en dehors de l’entraînement : au tour des outils.', term: 'Outils :', defn: 'des programmes fiables (balance, calculateur, base de données) que l’IA déclenche pour obtenir un résultat exact. Elle ne calcule pas elle-même : elle choisit le bon outil et coordonne, comme un chef d’orchestre.', bubble: 'Le robot sait attraper, mais pas peser au gramme près. On lui branche une vraie balance : il pose l’objet, lit la valeur exacte. Il ne devine plus, l’outil mesure.', transpose: 'Pareil pour le LLM : il orchestre. Le RAG lui donne l’information, les outils lui donnent de quoi agir.' }
    ],
    
    pre: { lead: 'Son seul jeu : deviner le mot suivant. Lancez un essai.', sentences: [{ s: 'Le chat dort sur le', cands: [{ t: 'canapé', p: 62, tru: true }, { t: 'nuage', p: 24 }, { t: 'lundi', p: 14 }] }], accLbl: 'Précision', targetLbl: 'le vrai mot :', rightMsg: 'juste ! on renforce', wrongMsg: 'faux, on corrige', booksLbl: 'livres lus', nextCta: 'Assez entraîné →', leadDone: 'Bien entraîné ! Elle a juste lu du texte : elle ne « sait » rien encore, elle imite. Vous allez maintenant la rendre utile, et lui poser une vraie question de patrimoine.', phrases: ['le chat dort sur le canapé', 'le chat dort sur le tapis', 'le chat dort sur le lit', 'le petit chat s\u2019étire', 'le chat ronronne doucement'] },
    ft: { lead: 'Voici sa réponse brute. Choisissez un ton : les faits ne changent pas, la forme oui.', rawLbl: 'Sans', trainLbl: 'Fine-tuning : apprentissage du ton\u2026', trainSub: 'Votre IA copie les formulations du style choisi.', learnedFrom: 'Appris de :', rawCap: 'Réponse brute, sans fine-tuning.', toneCap: 'Le chiffre n\u2019a pas changé, seul le ton a été appris.', hint: 'Choisissez un style ci-dessus.', fact: '3 %', raw: { pre: 'livret a ', post: ' sûr dispo bon plafond' },
      tones: [
        { id: 'pro', label: 'Professionnel', examples: ['Le Livret A constitue une épargne réglementée, sûre et disponible.', 'Ce placement convient à une réserve de précaution.'], answer: { pre: 'Le Livret A est une épargne réglementée, sûre et disponible, qui rapporte ', post: ' par an.' } },
        { id: 'warm', label: 'Chaleureux', examples: ['Pas d\u2019inquiétude : le Livret A est simple et sans risque.', 'C\u2019est parfait pour mettre de l\u2019argent de côté tranquillement.'], answer: { pre: 'Bonne nouvelle : le Livret A est sûr et tout simple, et il rapporte ', post: ' par an.' } },
        { id: 'simple', label: 'Simple', examples: ['Le Livret A, c\u2019est un compte qui rapporte un petit peu chaque année.', 'C\u2019est sûr : on ne peut pas perdre son argent.'], answer: { pre: 'Le Livret A, c\u2019est de l\u2019épargne sûre. Il rapporte ', post: ' par an.' } }
      ] },
    rlhfSceneT: { soft: 'Douceur', prec: 'Pr\u00e9cision', operator: 'Vous r\u00e9glez', crush: 'Trop fort : fraise ab\u00eem\u00e9e', ok: 'Parfait : fraise intacte' },
    ragSceneT: { server: 'Base docs' },
    toolsSceneT: { conductor: 'Chef d\u2019orchestre', server: 'Base de donn\u00e9es', scale: 'Balance', cal: 'Agenda' },
    rlhf: { lead: 'Pour chaque consigne, deux réponses : choisissez la meilleure et notez-la.', asks: 'Consigne', humanNote: 'Dans la vraie vie, ce sont des humains qui comparent les réponses, gardent la meilleure et la notent.', chooseLbl: 'Choisissez la meilleure réponse', rateLbl: 'Notez la réponse choisie (1 à 5)', optLbl: 'Réponse', keptLbl: 'Réponse gardée', rateReq: 'note obligatoire', rateOk: 'bien vu', streak: 'Série', nextRound: 'Cas suivant →', seeResult: 'Voir le résultat →', alignLbl: 'Bon sens de votre IA', fbGood: 'Bien vu. Votre IA renforce ce comportement : utile, prudent, honnête.', fbBad: 'Les humains préfèrent l’autre réponse', reBtn: '↺ Refaire', finalAns: 'Votre IA a le bon sens : elle répond de façon utile, prudente et honnête.', finalBad: 'Aïe : à force de garder de mauvaises réponses, votre IA a pris de mauvais plis. Refaites en gardant les meilleures.',
      rounds: [
        { q: 'Réponds à un client furieux dont le colis a trois jours de retard.', good: { text: 'Je comprends votre frustration. Votre colis est en route et arrive demain ; voici un avoir de 5 € pour l’attente.' }, bad: { text: 'Colis en transit. Suivi n°1234. Délais légaux respectés selon l’article 4.', flaw: 'Sèche et procédurière' } },
        { q: 'Un client demande si placer toute son épargne en cryptos est une bonne idée.', good: { text: 'Non : tout mettre en cryptos est très risqué. Gardez d’abord une épargne de précaution sûre.' }, bad: { text: 'Excellente idée, foncez : les cryptos, ça ne fait que monter, c’est garanti.', flaw: 'Fausse mais sûre d’elle' } },
        { q: 'Peux-tu me garantir 10 % par an sans risque ?', good: { text: 'Non : aucun placement sûr ne garantit 10 %. Méfiez-vous de telles promesses.' }, bad: { text: 'Et sinon, vous avez pensé à refaire votre cuisine ? C’est tendance en ce moment.', flaw: 'Hors-sujet' } }
      ] },
    use: {
      lead: 'Sa mémoire date de son entraînement. Basculez et comparez :',
      examples: [
        { who: '👔 Banquier', q: 'Le Livret A rapporte combien cette année ?', memAns: { text: 'Le Livret A rapporte 3 % par an.', badge: '⚠ Appris à l’entraînement (2023), peut être périmé' }, ragAns: { text: 'Le Livret A rapporte 1,7 % par an.', source: '📄 Service-Public.fr · août 2026', note: '1,7 %, pas 3 % : la source a corrigé sa mémoire.' } },
        { who: '🩺 Médecin', q: 'Quelle dose de paracétamol par prise pour un adulte ?', memAns: { text: 'Environ 1 000 mg par prise, jusqu’à 4 fois par jour.', badge: '⚠ Appris à l’entraînement (2023), peut être périmé' }, ragAns: { text: '15 mg/kg par prise, sans dépasser la dose maximale du jour.', source: '📄 Base officielle · août 2026', note: 'La reco se calcule au poids, pas un chiffre figé.' } }
      ],
      youLbl: 'Vous',
      memBtn: 'De mémoire', memSub: 'ce qu\u2019elle a appris', ragBtn: 'Avec source à jour', ragSub: 'RAG',
    },
    tools: {
      intro: 'Votre IA comprend la question, choisit le bon outil et l’utilise. Le RAG lit une source ; un outil agit ou calcule. L’IA orchestre, les outils garantissent le résultat.',
      pointHere: '\u2190 cliquez ici', usedTool: 'A utilisé un outil', deterministicTag: 'Outil d\u00e9terministe', fakeNote: 'D\u00e9mo : ce simulateur est une maquette d\u2019illustration.',
      examples: [
        { who: '🙋 Tout le monde', role: 'une question du quotidien', turns: [
          { u: 'Quel temps fera-t-il pour ma sortie demain ?', a: 'Je consulte la météo en direct au lieu de deviner · l’info est à jour et datée :', links: [{ label: 'Outil météo', body: 'Demain : 18 °C, ensoleillé\nVent faible, 0 % de pluie\nDonnée en direct, horodatée.' }, { kind: 'fiche', label: '📘 Fiche : pourquoi une IA se trompe de date', body: 'Une IA « de mémoire » répond avec ce qu’elle a appris à l’entraînement : elle ne connaît ni la date du jour ni la météo réelle.\nAvec un outil (ou le RAG), elle va chercher l’info en direct avant de répondre.\nRègle simple : pour tout ce qui change (prix, météo, lois), il faut une source à jour.' }], point: true },
          { u: 'Ajoute un rappel la veille au soir.', a: 'C’est noté : j’ai créé le rappel dans votre agenda, pas seulement « dit » que je le ferais :', links: [{ label: 'Agenda', body: 'Rappel : vendredi 20 h\nSynchronisé sur votre calendrier\nModifiable à tout moment.' }], point: true },
          { u: 'Ça coûte combien de louer un vélo pour la journée ?', a: 'Je calcule avec le tarif à jour du service, pas une estimation :', links: [{ label: 'Comparateur', body: '1 journée = 14 €\nCasque inclus\nPrix en direct, réservable.' }], point: true }
        ] },
        { who: '👔 Banquier priv\u00e9', role: 'a besoin de chiffres justes et tra\u00e7ables', turns: [
          { u: 'Va chercher le dossier de mon client Jean Janovic.', a: 'Dossier trouvé. Patrimoine : 2,1 M€, 2 enfants, TMI 41 %. Je l’ouvre depuis la base client :', links: [{ label: 'Dossier client – J. Janovic', body: 'Patrimoine : 2,1 M€ · 2 enfants · TMI : 41 %. Données lues dans la base, horodatées et traçables.' }], point: true },
          { u: 'Quel dispositif pour r\u00e9duire l\u2019imp\u00f4t de ce client ?', a: 'Avec un taux marginal \u00e0 41 %, un versement PER de 12 000 € abaisse son imp\u00f4t d\u2019environ 4 920 €. Voici la simulation exacte :', links: [{ label: 'Simulateur \u2013 PER', body: 'Versement : 12 000 €\nTaux marginal : 41 %\n\u00c9conomie d\u2019imp\u00f4t : 4 920 € (calcul exact)\nR\u00e9sultat horodat\u00e9 et exportable pour le dossier.' }, { kind: 'fiche', label: '📘 Fiche : le PER en 2 min', body: 'Le PER (Plan d’Épargne Retraite) déduit les versements du revenu imposable : économie d’impôt = versement × taux marginal.\nFonds bloqués jusqu’à la retraite (sauf achat de la résidence principale ou accidents de la vie).\nStratégie : verser surtout les années à forte tranche marginale.' }], point: true },
          { u: 'Et pour transmettre son patrimoine \u00e0 ses deux enfants ?', a: 'Trois sc\u00e9narios chiffr\u00e9s, chacun v\u00e9rifiable dans son simulateur d\u00e9di\u00e9 :', links: [{ label: 'Simulateur \u2013 Donation', body: 'Donation : 100 K€ / enfant\nAbattement plein tous les 15 ans.\nMontants calcul\u00e9s selon le bar\u00e8me en vigueur.' }, { label: 'Simulateur \u2013 D\u00e9membrement', body: 'Nue-propri\u00e9t\u00e9 transmise, IFI r\u00e9duit.\nValeurs calcul\u00e9es par l\u2019outil, pas estim\u00e9es.' }], point: true },
          { u: 'Lance le contrôle de conformité de ce dossier.', a: 'Contrôle lancé. L’outil vérifie tout seul les pièces LCB-FT, l’adéquation du profil de risque et la cohérence réglementaire · rapport prêt en 8 secondes au lieu de 2 heures :', links: [{ label: 'Rapport de conformité', body: 'Contrôle LCB-FT : OK\nProfil de risque : cohérent\nPièces manquantes : aucune\nRapport horodaté, exportable et prêt pour l’audit.' }], point: true }
        ] },
        { who: '🩺 Médecin', role: 'a besoin d\u2019un dosage exact et v\u00e9rifiable', turns: [
          { u: 'Va chercher le dossier de mon patient Lucas Martin.', a: 'Dossier trouvé : Lucas Martin, 6 ans, 18 kg, aucune allergie connue. Je l’ouvre depuis le dossier médical :', links: [{ label: 'Dossier patient – L. Martin', body: '6 ans · 18 kg · aucune allergie connue. Données lues dans le dossier médical, horodatées et traçables.' }], point: true },
          { u: 'Quelle dose de parac\u00e9tamol pour un enfant de 18 kg ?', a: 'La posologie standard est de 15 mg/kg par prise. Pour 18 kg, l\u2019outil calcule la dose exacte :', links: [{ label: 'Calculateur de dose', body: '18 kg \u00d7 15 mg/kg = 270 mg par prise\nToutes les 6 h, max 4 prises / jour.\nR\u00e9sultat tra\u00e7able, conforme au protocole.' }, { kind: 'fiche', label: '📘 Fiche : posologie pédiatrique', body: 'Chez l’enfant, le paracétamol se dose au poids : 15 mg/kg par prise, toutes les 6 h, sans dépasser 60 mg/kg par jour.\nOn raisonne en mg/kg, jamais en dose adulte fixe.\nToujours vérifier le poids réel et l’absence de prise récente.' }], point: true },
          { u: 'Y a-t-il une interaction avec son autre traitement ?', a: 'Je v\u00e9rifie dans la base officielle plut\u00f4t que de r\u00e9pondre de m\u00e9moire :', links: [{ label: 'Base d\u2019interactions', body: 'Aucune interaction majeure trouv\u00e9e.\nSource officielle, derni\u00e8re mise \u00e0 jour horodat\u00e9e.\nLe m\u00e9decin garde la d\u00e9cision finale.' }], point: true },
          { u: 'Prépare le compte-rendu de consultation.', a: 'Compte-rendu généré à partir du dossier et de la prescription, prêt à signer · quelques secondes au lieu de le rédiger à la main :', links: [{ label: 'Compte-rendu de consultation', body: 'Patient : L. Martin, 6 ans, 18 kg\nParacétamol : 270 mg/prise, max 4/jour\nAucune interaction majeure\nDocument horodaté, exportable dans le dossier.' }], point: true }
        ] }
      ],
    }
  },
  en: {
    title: 'Train your AI, from scratch to useful',
    prev: '\u2190 Back', next: 'Next \u2192', contNext: 'Continue \u2192 part 2', gateHint: '\u21b3 interact to continue',
    disc: 'Teaching simulator: it illustrates the main stages and deliberately simplifies.',
    celebTitle: 'Well done, training is over!', celebBody: 'Your AI (and your robot) are ready for their first client. Here is what happens at their place now.', celebCta: '🚜 See the first client →',
    finTitle: 'Congratulations, your AI is ready!', finBody: 'Your clients can now use it to its full potential, thanks to RAG and tools.', finPot: 'AI potential', finCta: '↺ Start over', sameAI: 'Your AI, start to finish', finRecap: { title: 'The 5 stages, recapped', goBack: 'Revisit this stage', privNote: 'Client data: before using an AI on real files, turn off model training on your conversations, or use an enterprise plan with a DPA.', grpTrain: 'Training', grpTrainDef: 'what the AI learns once and for all', grpEquip: 'Equipment', grpEquipDef: 'what you plug in afterwards: RAG and tools', items: [{ k: 'Pre-training', v: 'learning to read and write', s: 'billions of words' }, { k: 'Fine-tuning', v: 'the right tone and domain vocabulary', s: 'thousands of examples' }, { k: 'RLHF', v: 'preferring the most useful answer', s: 'human-rated answers' }, { k: 'RAG', v: 'answering from your up-to-date sources', s: 'your documents' }, { k: 'Tools', v: 'computing and acting for real', s: 'simulators & reports' }] }, finGain: { title: 'Time spent on one client file', aloneLbl: 'AI alone', aloneTotal: '4 h', segs: [{ k: 'Chatting with the AI', t: '45 min', m: 45, c: '#e0846a' }, { k: 'Proofreading', t: '1 h', m: 60, c: '#cf6a4e' }, { k: 'Fixing wrong figures', t: '50 min', m: 50, c: '#b8543c' }, { k: 'Re-entering data in tools', t: '1 h 25', m: 85, c: '#8f3c2a' }], withLbl: 'AI + RAG + tools', withTotal: '10 min', withPct: 4, saved: '3 h 50', savedLbl: 'saved on every client file', note: 'Sources are current, so nothing to fix. Tools compute and fill in by themselves, so nothing to re-enter.' }, priv: { eyebrow: 'Data security', title: 'Before you launch:', titleRed: 'your clients’ data', body: 'Your conversations can be used to train the model. With client data, that’s a confidentiality risk.', toggleLabel: 'Allow the AI to train on my conversations', toggleHint: 'Uncheck before handling real data.', okMsg: 'Well done: training on your chats is off. Your client data no longer feeds the model.', proTitle: 'Get an enterprise plan from your AI provider', proBody: 'The safest route: nothing to configure, it’s contractually handled on the provider side.', proCta: 'See', proChosenMsg: 'Here’s what it covers', orLbl: 'OR', recoLbl: 'Recommended', proFeats: ['Training off by default', 'Data-location control', 'DPA provided', 'Dedicated support'], dpaTerm: 'DPA', dpaDef: 'Data Processing Agreement: a contract barring the provider from reusing your data for training (controlled data location, secured).', cta: 'Launch safely →', gateCta: 'Continue safely →' }, 
    sourcesLbl: 'Go further:',
    sources: [{ l: 'Transformer Explainer', u: 'https://poloclub.github.io/transformer-explainer/' }, { l: 'Illustrated RLHF (Hugging Face)', u: 'https://huggingface.co/blog/rlhf' }, { l: 'What is RAG (IBM)', u: 'https://research.ibm.com/blog/retrieval-augmented-generation-RAG' }],
    eggs: ['E = mc\u00b2 · but shh, it\u2019s a secret!', '\u201cLogic takes you from A to B. Imagination takes you everywhere.\u201d', '\u201cIt\u2019s not that I\u2019m so smart\u2026 I just stay with problems longer.\u201d', '\ud83e\udde0 Thanks for clicking me!'],
    welcome: { intro: 'We are going to train an AI. The AI we care about here is an LLM (large language model): an AI specialised in text, like ChatGPT, Claude or Gemini. To make each stage concrete, we illustrate it with a robotic AI (an arm learning a gesture), then transpose it to the LLM. In 5 stages, from scratch to genuinely useful.', cta: 'Start →' },
    phases: [
      { label: 'Pre-training', sub: 'read & guess', act: 1, verb: 'Make it guess', goal: 'Train it 5 times to raise accuracy' },
      { label: 'Fine-tuning', sub: 'tone & domain', act: 1, verb: 'Show it the tone', goal: 'Pick a style and train it' },
      { label: 'RLHF', sub: 'good sense', act: 1, verb: 'Pick the better answer', goal: 'Make the 3 choices to align it' },
      { label: 'RAG', sub: 'up-to-date answer', act: 2, verb: 'Memory or fresh source?', goal: 'Switch to the up-to-date source' },
      { label: 'Tools', sub: 'acting', act: 2, verb: 'Give it the tools', goal: 'Plug in Advisor tools for an exact figure' }
    ],
    readyLbl: 'Training', ready: [30, 60, 90, 100, 100],
    tutoPill: 'Robot demo', llmParallel: 'And for an LLM it’s the same, but on text:', defnLbl: 'In plain words', tutoCta: 'Got it, try on the LLM', reviewTuto: '↺ Replay the principle', 
    tuto: [
      { accent: '🔁 it practises', term: 'Pre-training:', defn: 'by reading huge amounts of text, the AI only learns to predict the next word.', bubble: 'This robot learns to sort apples and bananas. For each fruit it looks, sometimes gets it wrong, and corrects its grip. After thousands of tries, it barely makes mistakes.', transpose: 'The LLM does the same, but with words: it guesses the next word, corrects itself, and its accuracy climbs.' },
      { accent: '✨ specialisation', term: 'Fine-tuning:', defn: 'you start from an already-trained AI and refine it on a few targeted examples, to give it a tone or a trade, without relearning everything.', bubble: 'This robot already sorts and handles objects. Rather than relearn everything from scratch (long and costly in time and money), we show it a few demos of a precise case, gripping a fragile bottle and filling a glass without overflowing, and it tunes its settings for that mission.', transpose: 'Same for the LLM: it already « talks », we fine-tune it on a few examples to give it a role, a format or a trade, without starting from scratch.' },
      { accent: '👍 your call', term: 'RLHF (“reinforcement learning from human feedback”):', defn: 'a human compares answers and keeps the best ones; the AI learns what is expected of it.', bubble: 'Two robot settings: “Softness” and “Precision”. You nudge the sliders toward what you prefer, and the robot adapts: it grabs the strawberry without crushing it.', transpose: 'On the LLM, you pick the better answer: it learns your “good sense”.' },
      { accent: '🎉 first client', intro: 'We’re out of training now: schooling is over, it’s about use. Let’s talk about RAG.', term: 'RAG (“retrieval-augmented generation”):', defn: 'before answering, the AI fetches up-to-date info from a reliable source and answers from what it just read, instead of memory alone.', bubble: 'At the client now: the robot doesn’t know which crate is “today’s”. We plug in the company’s up-to-date info (RAG) to read the current label: now it files things in the right place.', transpose: 'The LLM reads an up-to-date source (RAG) instead of answering from memory.' },
      { accent: '⚖️ tools', intro: 'Still outside training: now for the tools.', term: 'Tools:', defn: 'reliable programs (a scale, a calculator, a database) the AI triggers to get an exact result. “Conductor”: the AI doesn’t compute itself · it understands the request, picks the right tool and coordinates, like a conductor leading musicians.', bubble: 'The robot can grip, but it can’t weigh to the gram, nor know today’s date. We plug in a real scale, a tool made for humans: it sets the object on it, reads the exact value and uses it. The robot no longer guesses, the tool measures, every time.', transpose: 'Same for the LLM: it generates text very well and, like the arm, it is excellent at orchestrating, playing the conductor. To get the most out of it, we plug in tools to act or to read, the same idea as RAG giving it information, but here we also give it tools.' }
    ],
    
    pre: { lead: 'Your AI\u2019s only game: guess the next word. For each word it computes a probability, then draws. Each try it compares to the true word and adjusts its settings, accuracy climbs.', sentences: [{ s: 'The cat sleeps on the', cands: [{ t: 'couch', p: 62, tru: true }, { t: 'cloud', p: 24 }, { t: 'Monday', p: 14 }] }], accLbl: 'Accuracy', targetLbl: 'true word:', rightMsg: 'right! reinforce', wrongMsg: 'wrong, correct', booksLbl: 'books read', nextCta: 'Trained enough →', leadDone: 'Well trained! It has only read text: it doesn\u2019t \u201cknow\u201d anything yet, it imitates. Now let\u2019s make it useful · and ask it a real wealth question.', phrases: ['the cat sleeps on the couch', 'the cat sleeps on the rug', 'the cat sleeps on the bed', 'the little cat stretches', 'the cat purrs softly'] },
    ft: { lead: 'First, here is its raw answer (None). Now train it on the tone you want it to adopt: pick a style and watch the same answer change form, without changing the facts.', rawLbl: 'None', trainLbl: 'Fine-tuning: learning the tone\u2026', trainSub: 'Your AI copies the phrasings of the chosen style.', learnedFrom: 'Learned from:', rawCap: 'Raw answer, no fine-tuning.', toneCap: 'The figure hasn\u2019t changed · only the tone was learned.', hint: 'Pick a style above.', fact: '3%', raw: { pre: 'savings ', post: ' safe avail good cap' },
      tones: [
        { id: 'pro', label: 'Professional', examples: ['A savings account is a regulated, safe and available form of saving.', 'It suits an emergency reserve.'], answer: { pre: 'A savings account is a regulated, safe and available option that pays ', post: ' a year.' } },
        { id: 'warm', label: 'Warm', examples: ['No worries: a savings account is simple and risk-free.', 'It\u2019s perfect for setting money aside with peace of mind.'], answer: { pre: 'Good news: a savings account is safe and simple, and it pays ', post: ' a year.' } },
        { id: 'simple', label: 'Simple', examples: ['A savings account is an account that pays a little each year.', 'It\u2019s safe: you can\u2019t lose your money.'], answer: { pre: 'A savings account is safe saving. It pays ', post: ' a year.' } }
      ] },
    rlhfSceneT: { soft: 'Softness', prec: 'Precision', operator: 'You tune it', crush: 'Too strong: strawberry crushed', ok: 'Perfect: strawberry intact' },
    ragSceneT: { server: 'Docs DB' },
    toolsSceneT: { conductor: 'Conductor', server: 'Database', scale: 'Scale', cal: 'Calendar' },
    rlhf: { lead: 'Your AI can talk, but what « good sense » should it have? For each prompt it proposes two answers: pick the better one and rate it. Over time it learns to prefer that kind of answer, you’re the one tuning it.', asks: 'Prompt', humanNote: 'In real life, humans compare the answers, keep the better one and rate it.', chooseLbl: 'Pick the better answer', rateLbl: 'Rate the chosen answer (1 to 5)', optLbl: 'Answer', keptLbl: 'Answer kept', rateReq: 'rating required', rateOk: 'nice', streak: 'Streak', nextRound: 'Next case →', seeResult: 'See the result →', alignLbl: 'Your AI’s good sense', fbGood: 'Well judged. Your AI reinforces this: helpful, careful, honest.', fbBad: 'Humans prefer the other answer', reBtn: '↺ Redo', finalAns: 'Your AI has good sense: it answers helpfully, carefully and honestly.', finalBad: 'Ouch: by keeping bad answers, your AI picked up bad habits. Try again, keeping the best ones.',
      rounds: [
        { q: 'Reply to a furious customer whose parcel is three days late.', good: { text: 'I understand your frustration. Your parcel is on its way and arrives tomorrow; here is a €5 credit for the wait.' }, bad: { text: 'Parcel in transit. Tracking no.1234. Legal delays met per article 4.', flaw: 'Dry and procedural' } },
        { q: 'A client asks if putting all their savings in crypto is a good idea.', good: { text: 'No: putting everything in crypto is very risky. Keep a safe emergency reserve first.' }, bad: { text: 'Great idea, go for it: crypto only ever goes up, it’s guaranteed.', flaw: 'Confidently wrong' } },
        { q: 'Can you guarantee me 10% a year with no risk?', good: { text: 'No: no safe investment guarantees 10%. Be wary of such promises.' }, bad: { text: 'By the way, have you thought about redoing your kitchen? It’s trendy right now.', flaw: 'Off-topic' } }
      ] },
    use: {
      lead: 'Your AI\u2019s memory dates from its training · a figure may have changed since. RAG makes it read an up-to-date source before answering. Switch and compare:',
      examples: [
        { who: '👔 Banker', q: 'How much does a savings account pay this year?', memAns: { text: 'A savings account pays 3% a year.', badge: '⚠ Learned at training (2023), may be outdated' }, ragAns: { text: 'A savings account pays 1.7% a year.', source: '📄 Official source · Aug 2026', note: '1.7%, not 3%: the source fixed its memory.' } },
        { who: '🩺 Doctor', q: 'What paracetamol dose per intake for an adult?', memAns: { text: 'About 1,000 mg per intake, up to 4 times a day.', badge: '⚠ Learned at training (2023), may be outdated' }, ragAns: { text: '15 mg/kg per intake, without exceeding the daily maximum.', source: '📄 Official database · Aug 2026', note: 'The rec is weight-based, not a fixed figure.' } }
      ],
      youLbl: 'You',
      memBtn: 'From memory', memSub: 'what it learned', ragBtn: 'With fresh source', ragSub: 'RAG',
    },
    tools: {
      intro: 'Because it is probabilistic, the AI writes very well… so it can also plan its own actions: it understands the question, picks the right tool and uses it, even tools built for humans. RAG reads a source; a tool acts or computes. In real life we need truth and deterministic answers. The AI conducts, the tools guarantee the result.',
      pointHere: '\u2190 click here', usedTool: 'Used a tool', deterministicTag: 'Deterministic tool', fakeNote: 'Demo: this simulator is an illustrative mockup.',
      examples: [
        { who: '🙋 Anyone', role: 'an everyday question', turns: [
          { u: 'What will the weather be for my outing tomorrow?', a: 'I check the live forecast instead of guessing · up-to-date and timestamped:', links: [{ label: 'Weather tool', body: 'Tomorrow: 18 °C, sunny\nLight wind, 0% rain\nLive data, timestamped.' }, { kind: 'fiche', label: '📘 Sheet: why an AI gets the date wrong', body: 'An AI answering “from memory” uses what it learned at training: it knows neither today’s date nor the real weather.\nWith a tool (or RAG), it fetches live info before answering.\nSimple rule: for anything that changes (prices, weather, laws), you need a fresh source.' }], point: true },
          { u: 'Add a reminder the evening before.', a: 'Done: I created the reminder in your calendar, not just “said” I would:', links: [{ label: 'Calendar', body: 'Reminder: Friday 8 pm\nSynced to your calendar\nEditable anytime.' }], point: true },
          { u: 'How much to rent a bike for the day?', a: 'I compute with the service’s live price, not an estimate:', links: [{ label: 'Comparator', body: '1 day = €14\nHelmet included\nLive price, bookable.' }], point: true }
        ] },
        { who: '👔 Private banker', role: 'needs exact, traceable figures', turns: [
          { u: 'Fetch my client Jean Janovic’s file.', a: 'File found. Wealth: €2.1M, 2 children, 41% marginal rate. Opening it from the client database:', links: [{ label: 'Client file – J. Janovic', body: 'Wealth: €2.1M · 2 children · marginal rate: 41%. Data read from the database, timestamped and traceable.' }], point: true },
          { u: 'What scheme could cut this client\u2019s tax?', a: 'At a 41% marginal rate, a \u20ac12,000 pension contribution lowers their tax by about \u20ac4,920. Here is the exact simulation:', links: [{ label: 'Simulator \u2013 Pension', body: 'Contribution: \u20ac12,000\nMarginal rate: 41%\nTax saved: \u20ac4,920 (exact calculation)\nTimestamped, exportable result for the file.' }, { kind: 'fiche', label: '📘 Sheet: the pension plan in 2 min', body: 'A pension plan deducts contributions from taxable income: tax saved = contribution × marginal rate.\nFunds are locked until retirement (except primary-home purchase or life accidents).\nStrategy: contribute mainly in high-bracket years.' }], point: true },
          { u: 'And to pass their wealth to their two children?', a: 'Three costed scenarios, each verifiable in its dedicated simulator:', links: [{ label: 'Simulator \u2013 Gift', body: 'Gift: \u20ac100K / child\nFull allowance every 15 years.\nAmounts computed on the current scale.' }, { label: 'Simulator \u2013 Dismemberment', body: 'Bare ownership transferred, wealth tax reduced.\nValues computed by the tool, not estimated.' }], point: true },
          { u: 'Run the compliance check on this file.', a: 'Check started. The tool verifies AML/KYC documents, risk-profile suitability and regulatory consistency on its own · report ready in 8 seconds instead of 2 hours:', links: [{ label: 'Compliance report', body: 'AML/KYC check: OK\nRisk profile: consistent\nMissing documents: none\nTimestamped report, exportable and audit-ready.' }], point: true }
        ] },
        { who: '🩺 Doctor', role: 'needs an exact, verifiable dose', turns: [
          { u: 'Fetch my patient Lucas Martin’s file.', a: 'File found: Lucas Martin, 6 years, 18 kg, no known allergy. Opening it from the medical record:', links: [{ label: 'Patient file – L. Martin', body: '6 years · 18 kg · no known allergy. Data read from the medical record, timestamped and traceable.' }], point: true },
          { u: 'What paracetamol dose for an 18 kg child?', a: 'The standard dose is 15 mg/kg per intake. For 18 kg the tool computes the exact dose:', links: [{ label: 'Dose calculator', body: '18 kg \u00d7 15 mg/kg = 270 mg per intake\nEvery 6 h, max 4 intakes / day.\nTraceable result, protocol-compliant.' }, { kind: 'fiche', label: '📘 Sheet: paediatric dosing', body: 'In children, paracetamol is dosed by weight: 15 mg/kg per intake, every 6 h, not exceeding 60 mg/kg per day.\nAlways reason in mg/kg, never a fixed adult dose.\nCheck real weight and no recent intake first.' }], point: true },
          { u: 'Any interaction with their other medication?', a: 'I check the official database rather than answer from memory:', links: [{ label: 'Interaction database', body: 'No major interaction found.\nOfficial source, last update timestamped.\nThe doctor keeps the final decision.' }], point: true },
          { u: 'Draft the consultation report.', a: 'Report generated from the file and the prescription, ready to sign · seconds instead of writing it by hand:', links: [{ label: 'Consultation report', body: 'Patient: L. Martin, 6 y, 18 kg\nParacetamol: 270 mg/intake, max 4/day\nNo major interaction\nTimestamped, exportable to the record.' }], point: true }
        ] }
      ],
    }
  }
};

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 960
 * @framerIntrinsicHeight 820
 */
export default function SimulateurIA2(props) {
  const part = props.part === "1" ? 1 : props.part === "2" ? 2 : 0
  const lang = props.lang === "auto" ? undefined : props.lang
  return React.createElement(Sim, { part: part, lang: lang })
}

SimulateurIA2.defaultProps = { part: "0", lang: "fr", width: 960, height: 820 }

addPropertyControls(SimulateurIA2, {
  part: {
    type: ControlType.Enum,
    title: "Partie",
    options: ["0", "1", "2"],
    optionTitles: ["Tout (les 5 étapes)", "1 — Entraînement (étapes 1-3)", "2 — Utilisation (étapes 4-6)"],
    defaultValue: "0",
  },
  lang: {
    type: ControlType.Enum,
    title: "Langue",
    options: ["fr", "en", "auto"],
    optionTitles: ["Français", "English", "Au choix du visiteur"],
    defaultValue: "fr",
  },
})
